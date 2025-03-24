import { ArrowDownLeft, ArrowUpRight, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const transactions = [
  {
    id: "t1",
    name: "Rahul Sharma",
    date: "Today, 2:34 PM",
    amount: 2000,
    type: "credit",
  },
  {
    id: "t2",
    name: "Mobile Recharge",
    date: "Yesterday, 4:15 PM",
    amount: 499,
    type: "debit",
  },
  {
    id: "t3",
    name: "Electricity Bill",
    date: "Feb 20, 9:30 AM",
    amount: 1250,
    type: "debit",
  },
];

export const RecentTransactions = () => {
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

      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <Link
              to={`/transaction/${transaction.id}`}
              className="flex items-center justify-between p-4 glass rounded-xl hover:bg-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "credit"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? (
                    <ArrowDownLeft className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-sm">{transaction.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p
                  className={`font-medium ${
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}₹
                  {transaction.amount.toLocaleString("en-IN")}
                </p>
                <ChevronRight className="h-4 w-4 ml-2 text-muted-foreground" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
