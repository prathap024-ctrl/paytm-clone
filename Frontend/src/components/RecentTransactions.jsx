import axios from "axios";
import { ChevronRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const [filtered, setFiltered] = useState("all");

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "https://paytm-clone-backend-bdfj.onrender.com",
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
  const userId = localStorage.getItem("userId");

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

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium flex items-center">
          <span className="bg-white text-black p-1 rounded-md mr-2">
            <Clock className="h-4 w-4" />
          </span>
          Recent Transactions
        </h3>
        <Link
          to="/transactions"
          className="text-primary text-sm font-medium flex items-center"
        >
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-2">
        {filtered.length > 0 ? (
          transactions.map((tx) => {
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
                  <p className="text-xs text-muted-foreground">{phoneOrUpi}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDateTime(tx.createdAt)} • {bankInfo}
                  </p>
                </div>
                <div
                  className={`text-md font-bold flex flex-col items-center ${
                    isSent ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {inrFormatter.format(tx.amount)}
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
    </div>
  );
};
