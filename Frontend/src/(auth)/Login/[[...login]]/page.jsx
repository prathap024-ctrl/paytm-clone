import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required!");
      return;
    }
    if (!formData.password) {
      toast.error("Password is required!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://paytm-clone-backend-bdfj.onrender.com/api/v2/user/login",
        new URLSearchParams(formData),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      console.log(response);

      toast.success("Login successful!");
      navigate("/index", { replace: true });
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error("Invalid credentials");
      } else {
        toast.error("Login failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-6 glass rounded-xl p-6">
          <h2 className="text-2xl font-bold text-center text-[#002970]">
            Log In
          </h2>
          <p className="text-center text-sm text-muted-foreground">
            Access your Paytm account
          </p>

          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white rounded-full"
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

          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>

          <div className="text-center text-sm space-y-2">
            <p>
              <Link
                to="/password-reset"
                className="text-[#002970] hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#002970] hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
