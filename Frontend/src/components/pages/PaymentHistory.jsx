import { Layout } from "@/components/Layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, XCircle } from "lucide-react";

const transactions = [
  { id: "t1", type: "Sent", to: "Rahul Sharma", amount: "₹500", date: "Mar 18, 2025", status: "Success" },
  { id: "t2", type: "Received", from: "Priya Singh", amount: "₹200", date: "Mar 17, 2025", status: "Success" },
  { id: "t3", type: "Sent", to: "Amit Kumar", amount: "₹1000", date: "Mar 16, 2025", status: "Failed" },
  { id: "t4", type: "Bill Payment", to: "Electricity", amount: "₹1500", date: "Mar 15, 2025", status: "Success" },
  { id: "t5", type: "Recharge", to: "Mobile", amount: "₹199", date: "Mar 14, 2025", status: "Success" },
];

const TransactionItem = ({ transaction }) => (
  <div className="flex items-center justify-between p-4 hover:bg-secondary rounded-lg transition-colors">
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {transaction.status === "Success" ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <XCircle className="h-5 w-5 text-red-500" />
        )}
      </div>
      <div className="ml-3">
        <h4 className="font-medium">{transaction.type === "Sent" ? `To: ${transaction.to}` : `From: ${transaction.from || transaction.to}`}</h4>
        <p className="text-xs text-muted-foreground">{transaction.date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-semibold ${transaction.type === "Sent" ? "text-red-500" : "text-green-500"}`}>
        {transaction.type === "Sent" ? "-" : "+"}{transaction.amount}
      </p>
      <p className="text-xs text-muted-foreground">{transaction.status}</p>
    </div>
  </div>
);

const PaymentHistory = () => {
  return (
    <Layout>
      <div className="space-y-6 py-20">
        <h2 className="text-xl font-bold text-center mb-4">Payment History</h2>

        <ScrollArea className="h-[500px]">
          <div className="space-y-1">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </ScrollArea>

        {transactions.length === 0 && (
          <p className="text-center py-8 text-muted-foreground">No transactions found</p>
        )}
      </div>
    </Layout>
  );
};

export default PaymentHistory;