import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const transactions = [
  { id: "t1", type: "Sent", to: "Rahul Sharma", amount: "₹500", date: "Mar 18, 2025", status: "Success" },
  { id: "t2", type: "Received", from: "Priya Singh", amount: "₹200", date: "Mar 17, 2025", status: "Success" },
  { id: "t3", type: "Sent", to: "Amit Kumar", amount: "₹1000", date: "Mar 16, 2025", status: "Failed" },
];

const ProfileDashboard = () => {
  return (
    <Layout>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#002970] mb-6">Profile Dashboard</h2>

        {/* User Info Card */}
        <Card className="glass mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-6 w-6 text-[#002970]" /> User Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                <p className="text-sm text-muted-foreground">+91 9876543210</p>
              </div>
            </div>
            <Button
              className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] font-semibold py-3 rounded-full transition"
              asChild
            >
              <Link to="/profile/edit">Edit Profile</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 hover:bg-secondary rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {transaction.status === "Success" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">
                        {transaction.type === "Sent" ? `To: ${transaction.to}` : `From: ${transaction.from}`}
                      </h4>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.type === "Sent" ? "text-red-500" : "text-green-500"}`}>
                      {transaction.type === "Sent" ? "-" : "+"}{transaction.amount}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <Button variant="link" className="mt-4 mx-auto block" asChild>
              <Link to="/payment-history">View All Transactions</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProfileDashboard;