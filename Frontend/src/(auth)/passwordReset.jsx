import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5520/api/v2/user/currentuser",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );
        setUser(response.data);
        console.log(response);
      } catch (error) {
        console.error("Fetch user failed", error);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = async () => {
    if (!formData.email || !formData.oldPassword || !formData.newPassword) {
      toast.error("Fields must not be empty!");
      return;
    }

    setLoading(true);
    try {
      console.log(formData); // Check the object structure

      await axios.post(
        "http://localhost:5520/api/v2/user/changepassword",
        new URLSearchParams(formData),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );

      toast.success("Password has been changed Successfully!");
      setFormData({
        email: "",
        oldPassword: "",
        newPassword: "",
      });

      await axios.post(
        "http://localhost:5520/api/v2/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      navigate("/login", { replace: true });
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error("Invalid old password!");
      } else {
        toast.error("Failed to reset password!");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      {user ? (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full space-y-6 glass rounded-xl p-6 animate-scale-in">
            <h2 className="text-2xl font-bold text-center text-[#002970]">
              Reset Password
            </h2>
            <p className="text-center text-sm text-muted-foreground">
              Enter your old and new password.
            </p>

            <Input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white rounded-full"
            />
            <Input
              placeholder="Old Password"
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="bg-white rounded-full"
            />
            <Input
              placeholder="New Password"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="bg-white rounded-full"
            />

            <Button
              onClick={handleReset}
              className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
              disabled={loading}
            >
              {loading ? "Resetting Password..." : "Reset"}
            </Button>
            <p className="text-center text-sm">
              Back to{" "}
              <Link to="/login" className="text-[#002970] hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-64 space-y-6">
          <p className="text-2xl text-[#002970] text-center font-medium">
            You cannot reset the password without login! <br /> we are working
            on it!
          </p>
          <p className="text-center text-xl text-[#002970] font-extrabold">
            Back to{" "}
            <Link to="/login" className=" hover:underline">
              <Button className="px-10 cursor-pointer text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] py-3 rounded-full transition">
                <LogIn className="w-5 h-5" />
                Login
              </Button>
            </Link>
          </p>
        </div>
      )}
    </Layout>
  );
};
export default PasswordReset;
