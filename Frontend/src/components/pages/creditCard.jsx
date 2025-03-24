import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CreditCard } from "lucide-react";

const CreditCardBillPayment = () => {
  const [bank, setBank] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    if (!bank || !cardNumber || !amount) {
      setPaymentStatus("Please fill all fields");
      return;
    }
    setPaymentStatus("Processing payment...");
    setTimeout(() => {
      setPaymentStatus("Payment successful!");
      setCardNumber("");
      setAmount("");
    }, 1500);
  };

  const banks = [
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "SBI (State Bank of India)",
    "Kotak Mahindra Bank",
    "American Express",
  ];

  return (
    <Layout>
      <div className="space-y-6 py-20 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
          <CreditCard className="h-6 w-6" /> Credit Card Bill Payment
        </h2>

        <div className="glass rounded-xl p-4 animate-scale-in">
          {/* Bank Selection */}
          <Select onValueChange={setBank} value={bank}>
            <SelectTrigger className="mb-3 bg-white rounded-full">
              <SelectValue placeholder="Select Bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map((bankName) => (
                <SelectItem key={bankName} value={bankName.toLowerCase().replace(/\s+/g, "-")}>
                  {bankName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Card Number Input */}
          <Input
            placeholder="Credit Card Number (e.g., 1234 5678 9012 3456)"
            value={cardNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 16); // Only digits, max 16
              setCardNumber(value.replace(/(\d{4})/g, "$1 ").trim()); // Add space every 4 digits
            }}
            className="mb-3 bg-white rounded-full"
          />

          {/* Amount Input */}
          <Input
            placeholder="Amount (₹)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-3 bg-white rounded-full"
          />

          {/* Pay Button */}
          <Button
            onClick={handlePayment}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full transition"
          >
            Pay Bill
          </Button>

          {/* Payment Status */}
          {paymentStatus && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {paymentStatus}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreditCardBillPayment;