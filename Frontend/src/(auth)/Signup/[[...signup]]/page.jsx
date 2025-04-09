import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !(
        formData.email ||
        formData.username ||
        formData.fullname ||
        formData.phone ||
        formData.password
      )
    ) {
      toast.error(" Fill the empty fields!");
      return;
    }

    setLoading(true);
    try {
      console.log("Sending data:", formData);

      await axios.post(
        "https://paytm-clone-backend-bdfj.onrender.com/api/v2/user/signup",
        new URLSearchParams(formData),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );

      toast.success("Account created successfully!");
      
      // Extract the success message instead of the entire object
      navigate("/index", { replace: true });
      setFormData({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("User already exists! Try logging in.");
      } else {
        toast.error("Signup failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-6 glass rounded-xl p-6 animate-scale-in">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#002970] flex items-center justify-center gap-2">
              <UserPlus className="h-6 w-6" /> Sign Up
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Join Paytm and start making payments effortlessly
            </p>
          </div>

          {/* FORM STARTS */}

          <Input
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="bg-white rounded-full"
            required
          />
          <Input
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className="bg-white rounded-full"
            required
          />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white rounded-full"
            required
          />
          <Input
            name="phone"
            placeholder="Phone Number (10 digits)"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white rounded-full"
            required
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-white rounded-full"
            required
          />

          {/* SUBMIT BUTTON */}
          <Button
            onClick={handleSubmit}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#002970] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
