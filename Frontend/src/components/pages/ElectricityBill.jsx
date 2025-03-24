import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ElectricityBillPayment = () => {
  const [provider, setProvider] = useState("");
  const [consumerNumber, setConsumerNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    if (!provider || !consumerNumber || !amount) {
      setPaymentStatus("Please fill all fields");
      return;
    }
    setPaymentStatus("Processing payment...");
    setTimeout(() => {
      setPaymentStatus("Payment successful!");
      setConsumerNumber("");
      setAmount("");
    }, 1500);
  };

  return (
    <Layout>
      <div className="space-y-6 py-20 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Pay Electricity Bill</h2>

        <div className="glass rounded-xl p-4 animate-scale-in">
          <Select onValueChange={setProvider} value={provider}>
            <SelectTrigger className="mb-3 bg-white rounded-full">
              <SelectValue placeholder="Select Electricity Provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tata">Tata Power</SelectItem>
              <SelectItem value="reliance">Reliance Energy</SelectItem>
              <SelectItem value="bescom">BESCOM</SelectItem>
              <SelectItem value="mseb">MSEB</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Consumer Number"
            value={consumerNumber}
            onChange={(e) => setConsumerNumber(e.target.value)}
            className="mb-3 bg-white rounded-full"
          />
          <Input
            placeholder="Amount (₹)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-3 bg-white rounded-full"
          />

          <Button
            onClick={handlePayment}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full transition"
          >
            Pay Bill
          </Button>

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

export default ElectricityBillPayment;