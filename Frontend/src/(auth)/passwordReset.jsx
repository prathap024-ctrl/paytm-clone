import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleReset = () => {
    if (!email) {
      setStatus("Please enter your email");
      return;
    }
    setStatus("Sending reset link...");
    setTimeout(() => {
      setStatus("Reset link sent to your email!");
      setEmail("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-6 glass rounded-xl p-6 animate-scale-in">
          <h2 className="text-2xl font-bold text-center text-[#002970]">Reset Password</h2>
          <p className="text-center text-sm text-muted-foreground">
            Enter your email to receive a password reset link
          </p>

          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-full"
          />

          <Button
            onClick={handleReset}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
          >
            Send Reset Link
          </Button>

          {status && (
            <p className="text-center text-sm text-muted-foreground">{status}</p>
          )}

          <p className="text-center text-sm">
            Back to{" "}
            <Link to="/login" className="text-[#002970] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PasswordReset;