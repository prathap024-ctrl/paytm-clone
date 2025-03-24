import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const DTHWifiMobileRecharge = () => {
  const [serviceType, setServiceType] = useState("");
  const [provider, setProvider] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [rechargeStatus, setRechargeStatus] = useState(null);

  const handleRecharge = () => {
    if (!serviceType || !provider || !number || !amount) {
      setRechargeStatus("Please fill all fields");
      return;
    }
    setRechargeStatus("Processing recharge...");
    setTimeout(() => {
      setRechargeStatus("Recharge successful!");
      setNumber("");
      setAmount("");
    }, 1500);
  };

  const providers = {
    mobile: ["Airtel", "Jio", "Vodafone", "BSNL"],
    dth: ["Tata Sky", "Dish TV", "Airtel DTH", "Sun Direct"],
    wifi: ["Airtel Broadband", "Jio Fiber", "ACT Fibernet", "Hathway"],
  };

  return (
    <Layout>
      <div className="space-y-6 py-20 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Recharge</h2>

        <div className="glass rounded-xl p-4 animate-scale-in">
          <Select onValueChange={setServiceType} value={serviceType}>
            <SelectTrigger className="mb-3 bg-white rounded-full">
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="dth">DTH</SelectItem>
              <SelectItem value="wifi">WiFi</SelectItem>
            </SelectContent>
          </Select>

          {serviceType && (
            <Select onValueChange={setProvider} value={provider}>
              <SelectTrigger className="mb-3 bg-white rounded-full">
                <SelectValue placeholder="Select Provider" />
              </SelectTrigger>
              <SelectContent>
                {providers[serviceType]?.map((prov) => (
                  <SelectItem key={prov} value={prov.toLowerCase()}>{prov}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Input
            placeholder={serviceType === "wifi" ? "Account Number" : "Mobile Number / DTH ID"}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
            onClick={handleRecharge}
            className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full transition"
          >
            Recharge Now
          </Button>

          {rechargeStatus && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {rechargeStatus}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DTHWifiMobileRecharge;