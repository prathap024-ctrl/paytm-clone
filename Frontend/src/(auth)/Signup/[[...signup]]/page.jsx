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
    username: "",
    email: "",
    phone: "",
    fullname: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending data:", formData);

      await axios.post("http://localhost:5520/api/v2/user/signup", formData);

      toast.success("Account created successfully!");

      // Extract the success message instead of the entire object
      navigate("/index");
      setFormData({
        username: "",
        email: "",
        phone: "",
        fullname: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("User already exists! Try logging in.");
      } else {
        toast.error("Signup failed. Please try again later.");
      }
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
              type="submit"
              className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
            >
              Create Account
            </Button>
          </form>

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
