import { CreditCard, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBalance } from "../Context/balanceContext";

export const BalanceCard = () => {
  const { walletBalance, fetchBalance } = useBalance();
  const [showBalance, setShowBalance] = useState(true); // 👈 this was missing

  useEffect(() => {
    fetchBalance(); // ✅ comes from context
  }, [fetchBalance]);

  const inrFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-[#e8f8fd] z-0" />

      <div className="relative z-1">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-[#e8f8fd] p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-lg">Total Balance</h3>
            </div>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setShowBalance((prev) => !prev)}
                className="p-2 rounded-full hover:bg-white transition-colors"
                aria-label={showBalance ? "Hide balance" : "Show balance"}
              >
                {showBalance ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-1">
            {showBalance ? (
              <h2 key="balance" className="text-4xl font-semibold">
                {inrFormatter.format(Number(walletBalance).toFixed(2))}
              </h2>
            ) : (
              <h2 key="hidden" className="text-4xl font-semibold">
                ••••••
              </h2>
            )}
            <p className="text-sm text-muted-foreground">Updated just now</p>
          </div>

          <div className="flex gap-3 pt-2">
            <div className="flex-1">
              <Link
                to="/add-money"
                className="bg-[#002970] text-white rounded-full py-3 px-4 text-sm font-medium hover:bg-[#2f82ed] transition-colors flex items-center justify-center w-full"
              >
                <span>Add Money</span>
              </Link>
            </div>
            <div className="flex-1">
              <Link
                to="/transactions"
                className="hover:bg-[#2f82ed] text-white rounded-full py-3 px-4 text-sm font-medium bg-[#002970] transition-colors flex items-center justify-center w-full"
              >
                <span>Transactions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
