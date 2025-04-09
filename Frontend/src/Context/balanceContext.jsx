import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5173/api/v2/wallet/balance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );
      setWalletBalance(Number(res.data?.data?.walletBalance || 0));
    } catch (err) {
      console.error("Error fetching balance", err);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <BalanceContext.Provider value={{ walletBalance, fetchBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);
