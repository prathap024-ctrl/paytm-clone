import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setStatus("Please fill all fields");
      return;
    }
    setStatus("Logging in...");
    setTimeout(() => {
      setStatus("Login successful!");
      setEmail("");
      setPassword("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-6 glass rounded-xl p-6 ">
          <h2 className="text-2xl font-bold text-center text-[#002970]">
            Log In
          </h2>
          <p className="text-center text-sm text-muted-foreground">
            Access your Paytm account
          </p>

          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleLogin}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
          >
            Log In
          </Button>

          {status && (
            <p className="text-center text-sm text-muted-foreground">
              {status}
            </p>
          )}

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
