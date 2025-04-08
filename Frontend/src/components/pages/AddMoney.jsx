import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout";
import axios from "axios";
import { toast } from "sonner";
import { useBalance } from "../../Context/balanceContext";

const AddMoney = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(null);
  const [formData, setFormData] = useState({
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddMoney = async () => {
    if (
      !formData.amount ||
      isNaN(formData.amount) ||
      parseFloat(formData.amount) <= 0
    ) {
      toast.error("Enter a valid amount.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5520/api/v2/wallet/addmoney",
        new URLSearchParams(formData),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      toast.success("Money added successfully!");
      setFormData({ amount: "" });
      fetchBalance(); // Refresh balance after adding
    } catch (err) {
      console.error(err);
      toast.error("Failed to add money.");
    } finally {
      setLoading(false);
    }
  };

  const { walletBalance, fetchBalance } = useBalance();

  useEffect(() => {
    fetchBalance(); // ✅ comes from context
  }, [fetchBalance]);

  const inrFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <Layout>
      <div className="max-w-md mx-auto py-20 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Add Money to Wallet
        </h2>

        {balance !== null && (
          <div className="text-center font-medium text-green-600">
            Wallet Balance: {inrFormatter.format(walletBalance.toFixed(2))}
          </div>
        )}

        <Input
          name="amount"
          placeholder="Enter Amount"
          value={formData.amount}
          onChange={handleChange}
          className="bg-white rounded-full"
        />
        <Button
          onClick={handleAddMoney}
          disabled={loading}
          className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 px-6 rounded-full"
        >
          {loading ? "Adding..." : "Add Money"}
        </Button>
      </div>
    </Layout>
  );
};

export default AddMoney;
