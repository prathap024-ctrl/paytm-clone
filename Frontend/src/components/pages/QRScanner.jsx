import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, ArrowRight, CheckCircle } from "lucide-react";

const QRPaymentPage = () => {
  const [scannedCode, setScannedCode] = useState("");
  const [amount, setAmount] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleScan = () => {
    setIsScanning(false);
    setTimeout(() => {
      setScannedCode("paytm_user123");
      setIsScanning(false);
    }, 2000);
  };

  const handlePayment = () => {
    if (!amount || !scannedCode) return;
    setPaymentStatus("processing");
    setTimeout(() => {
      setPaymentStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="bg-[#002970] text-white p-4 rounded-t-lg">
          <h1 className="text-xl font-bold">Pay with QR</h1>
          <p className="text-sm">Scan & Pay Instantly</p>
        </div>

        {/* Main Card */}
        <Card className="w-full shadow-lg rounded-t-none">
          <CardContent className="p-4">
            {/* QR Scanner Section */}
            <div className="mb-6">
              <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                {isScanning ? (
                  <div className="animate-pulse text-center">
                    <QrCode className="w-12 h-12 mx-auto text-[#002970]" />
                    <p className="mt-2">Scanning...</p>
                  </div>
                ) : scannedCode ? (
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 mx-auto text-green-500" />
                    <p className="mt-2">Scanned: {scannedCode}</p>
                  </div>
                ) : (
                  <Button
                    onClick={handleScan}
                    className="bg-[#002970] hover:bg-[#002970]"
                  >
                    <QrCode className="mr-2 h-4 w-4" /> Scan QR Code
                  </Button>
                )}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Amount (₹)
              </label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₹0.00"
                className="w-full text-lg rounded-full"
              />
            </div>
            {/* Payment Status */}
            {paymentStatus === "success" && (
              <div className="text-center text-green-600">
                <p>Transaction completed successfully!</p>
                <p className="text-sm text-gray-600">
                  Paid ₹{amount} to {scannedCode}
                </p>
              </div>
            )}

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={
                !scannedCode || !amount || paymentStatus === "processing"
              }
              className="w-full mt-4 rounded-full bg-[#002970] hover:bg-[#002970] disabled:bg-gray-400"
            >
              {paymentStatus === "processing" ? (
                "Processing..."
              ) : paymentStatus === "success" ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" /> Payment Successful
                </>
              ) : (
                <>
                  Pay Now <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Secure Payment | Powered by Paytm</p>
        </div>
      </div>
    </div>
  );
};

export default QRPaymentPage;
