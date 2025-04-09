import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, EyeOff, Search } from "lucide-react";
import { toast } from "sonner";

import { useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { useBalance } from "../../Context/balanceContext";

const SendMoney = () => {
  const [formData, setFormData] = useState({
    receiverName: "",
    receiverUpiId: "",
    phone: "",
    amount: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState("all");
  const [loading, setLoading] = useState(false);
  const { walletBalance, fetchBalance } = useBalance();
  const [showBalance, setShowBalance] = useState(true); // 👈 this was missing

  useEffect(() => {
    fetchBalance(); // ✅ comes from context
  }, [fetchBalance]);

  const userId = localStorage.getItem("userId");

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5173/api/v2/wallet/history",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );
      setTransactions(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching transactions", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlepayment = async (e) => {
    e.preventDefault();
    if (!(formData.amount && (formData.phone || formData.receiverUpiId))) {
      toast.error("Amount and either Phone or UPI ID is required!");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5173/api/v2/wallet/send",
        new URLSearchParams(formData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Payment successful!");
      setFormData({
        receiverName: "",
        receiverUpiId: "",
        phone: "",
        amount: "",
      });
      await fetchBalance();
      await fetchTransactions();
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error("Insufficient balance! Please add money to your wallet.");
      } else {
        toast.error(
          error?.response?.data?.message || "Payment failed. Try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRepeat = (tx) => {
    setFormData({
      receiverName: tx.receiverName || "",
      phone: tx.phone || "",
      receiverUpiId: tx.receiverUpiId || "",
      amount: tx.amount,
    });
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };
  const inrFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const filteredTransactions = transactions.filter((tx) => {
    const isSent = tx.sender === userId;
    if (filtered === "sent" && isSent) return false;
    if (filtered === "received" && isSent) return false;
    const query = searchQuery.toLowerCase();
    return (
      (tx.receiverName && tx.receiverName.toLowerCase().includes(query)) ||
      (tx.phone && tx.phone.includes(query)) ||
      (tx.receiverUpiId && tx.receiverUpiId.toLowerCase().includes(query))
    );
  });

  return (
    <Layout>
      <div className="space-y-6 py-20 max-w-xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="flex gap-2 items-center">
              <p className="text-lg font-semibold">Wallet Balance</p>
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
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            name="search"
            placeholder="Search by name, phone or UPI ID"
            className="pl-9 bg-white border-none rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="glass rounded-xl p-4 animate-scale-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Pay by UPI ID / Number</h3>
          </div>

          <Input
            name="receiverName"
            placeholder="Enter Receiver Name"
            className="mb-3 bg-white rounded-full"
            value={formData.receiverName}
            onChange={handleChange}
          />
          <Input
            name="receiverUpiId"
            placeholder="Enter UPI ID"
            className="mb-3 bg-white rounded-full"
            value={formData.receiverUpiId}
            onChange={handleChange}
          />
          <Input
            name="phone"
            placeholder="Enter Mobile Number"
            className="mb-3 bg-white rounded-full"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            name="amount"
            placeholder="Enter Amount"
            className="mb-3 bg-white rounded-full"
            value={formData.amount}
            onChange={handleChange}
          />

          <Button
            onClick={handlepayment}
            disabled={loading}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full transition"
          >
            {loading ? "Processing..." : "Proceed to Pay"}
          </Button>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {["all", "sent", "received"].map((type) => (
            <Button
              key={type}
              variant="outline"
              className={clsx("capitalize", {
                "bg-[#002970] text-white": filtered === type,
              })}
              onClick={() => setFiltered(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="glass rounded-xl p-4 animate-fade-in">
          <h3 className="font-medium mb-3">Recent Transactions</h3>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx) => {
                  const isSent = tx.sender !== userId;
                  const emoji = isSent ? "💸 Sent to" : "✅ Received from";
                  const name = tx.receiverName;
                  const phoneOrUpi = tx.phone || tx.receiverUpiId || "N/A";
                  const bankInfo = tx.upiProvider || "Payment App";

                  return (
                    <div
                      key={tx._id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    >
                      <div>
                        <p className="font-medium">
                          {emoji} {name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {phoneOrUpi}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDateTime(tx.createdAt)} • {bankInfo}
                        </p>
                      </div>
                      <div
                        className={`text-md font-bold flex flex-col items-center ${
                          isSent ? "text-red-600" : "text-green-700"
                        }`}
                      >
                        ₹{tx.amount}
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-1 px-4 py-1 text-[#002970] border-[#002970] hover:bg-[#002970] hover:text-white rounded-full"
                          onClick={() => handleRepeat(tx)}
                        >
                          Repeat
                        </Button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No transactions found
                </p>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

export default SendMoney;
