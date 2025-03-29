import mongoose from "mongoose";
import Asynchandler from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/Users.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateAccessToken();
    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong generating refresh and access token!"
    );
  }
};

const registerUser = Asynchandler(async (req, res, next) => {
  //get user details from frontend
  const { fullname, email, username, password } = req.body;
  // Validation
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required!");
  }

  //check if user already exists, email and username
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!existedUser) {
    throw new ApiError(400, "User already exist!");
  }

  //create user object create entry in db
  const user = await User.create({
    fullname,
    email,
    username: username.toLowerCase(),
    password,
  });
  //remove and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  //check for user creation
  if (!createdUser) {
    throw new ApiError(400, "Something went Wrong!");
  }
  // return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registed Successfully!"));
});

const loginUser = Asynchandler(async (req, res) => {
  // request data from body
  const { email, username, password } = req.body;
  if (!(username || email)) {
    throw new ApiError(400, "Username or email is required!");
  }

  //username or email
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  //find user

  if (!user) {
    throw new ApiError(400, "User does not exist!");
  }

  //password check

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid credentials!");
  }
  //access and refresh token
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //send cookie

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User Logged In Successfully!"
      )
    );
});

const logOutUser = Asynchandler(async (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User Logged Out Successfully!"));
});

const refreshAccessToken = Asynchandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request!");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid refresh Token!");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used!");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .Cookie("accessToken", accessToken)
      .Cookie("refreshToken", newrefreshToken)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newrefreshToken },
          "Access Token Refreshed Successfully!"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token!");
  }
});

const changeCurrentPassword = Asynchandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid Old Password!");
  }
  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Changed Successfully!"));
});

const getCurrentUser = Asynchandler(async (req, res) => {
  return res
    .status(200)
    .json(200, req.user, "Current User Fetched Successfully!");
});

const updateAccountDetails = Asynchandler(async (req, res) => {
  const { fullname, email } = req.body;
  if (!(fullname || email)) {
    throw new ApiError(400, "All Fields are required!");
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullname,
        email: email,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated Successfully!"));
});

export {
  registerUser,
  loginUser,
  logOutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
};
