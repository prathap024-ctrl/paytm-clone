import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "sonner";
import SendMoney from "./components/pages/SendMoney";
import PayBills from "./components/pages/PayBills";
import Bookings from "./components/pages/Bookings";
import Profile from "./components/pages/Profile";
import Wallet from "./components/pages/Wallet";
import Transactions from "./components/pages/Transactions";
import NotFound from "./components/pages/NotFound";
import IndexPage from "./components/Sections/IndexPage";
import QRPaymentPage from "./components/pages/QRScanner";
import RequestMoney from "./components/pages/RequestMoney";
import PaymentHistory from "./components/pages/PaymentHistory";
import DTHWifiMobileRecharge from "./components/pages/Mobile-Wifi-recharge";
import ElectricityBillPayment from "./components/pages/ElectricityBill";
import CreditCardBillPayment from "./components/pages/creditCard";
import Login from "./(auth)/Login/[[...login]]/page";
import ProfileDashboard from "./components/pages/ProfileDashboard";
import PasswordReset from "./(auth)/passwordReset";
import Signup from "./(auth)/Signup/[[...signup]]/page";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const App = () => {
  return (
    <div>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/index" element={<IndexPage />} />
              <Route path="/profile-dashboard" element={<ProfileDashboard />} />
              <Route path="/send-money" element={<SendMoney />} />
              <Route path="/scan-and-pay" element={<QRPaymentPage />} />
              <Route path="/request-money" element={<RequestMoney />} />
              <Route path="/payment-history" element={<PaymentHistory />} />
              <Route
                path="/recharge-bills"
                element={<DTHWifiMobileRecharge />}
              />
              <Route
                path="/bill-payment"
                element={<ElectricityBillPayment />}
              />
              <Route
                path="/credit-card-bills"
                element={<CreditCardBillPayment />}
              />
              <Route path="/pay-bills" element={<PayBills />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wallet" element={<Wallet />} />

              <Route path="/transactions" element={<Transactions />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </TooltipProvider>
    </div>
  );
};

export default App;
