import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSignup = () => {
    if (!name || !email || !phone || !password) {
      setStatus("Please fill all fields");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setStatus("Please enter a valid 10-digit phone number");
      return;
    }
    setStatus("Creating account...");
    setTimeout(() => {
      setStatus("Account created successfully! Please log in.");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    }, 1500);
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

          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white rounded-full"
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-full"
          />
          <Input
            placeholder="Phone Number (10 digits)"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} // Only digits, max 10
            className="bg-white rounded-full"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white rounded-full"
          />

          <Button
            onClick={handleSignup}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
          >
            Create Account
          </Button>

          {status && (
            <p className="text-center text-sm text-muted-foreground">{status}</p>
          )}

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