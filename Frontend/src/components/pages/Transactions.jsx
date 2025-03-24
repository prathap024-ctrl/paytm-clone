import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  Download,
  Filter,
  Search,
  ShoppingBag,
  Smartphone,
  Tv,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    id: "t1",
    title: "Amazon",
    description: "Online shopping",
    amount: 1499,
    date: "Today, 10:30 AM",
    type: "debit",
    category: "Shopping",
    icon: ShoppingBag,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "t2",
    title: "Salary",
    description: "Monthly salary",
    amount: 45000,
    date: "Yesterday",
    type: "credit",
    category: "Income",
    icon: ArrowDownLeft,
    color: "text-green-600 bg-green-100",
  },
  {
    id: "t3",
    title: "Electricity Bill",
    description: "Tata Power",
    amount: 1450,
    date: "Feb 28, 2024",
    type: "debit",
    category: "Utilities",
    icon: Zap,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    id: "t4",
    title: "Netflix",
    description: "Subscription",
    amount: 649,
    date: "Feb 27, 2024",
    type: "debit",
    category: "Entertainment",
    icon: Tv,
    color: "text-red-600 bg-red-100",
  },
  {
    id: "t5",
    title: "Mobile Recharge",
    description: "Airtel Prepaid",
    amount: 299,
    date: "Feb 25, 2024",
    type: "debit",
    category: "Utilities",
    icon: Smartphone,
    color: "text-orange-600 bg-orange-100",
  },
  {
    id: "t6",
    title: "Transfer to Rahul",
    description: "UPI payment",
    amount: 2000,
    date: "Feb 24, 2024",
    type: "debit",
    category: "Transfer",
    icon: ArrowUpRight,
    color: "text-purple-600 bg-purple-100",
  },
  {
    id: "t7",
    title: "From Priya",
    description: "UPI payment",
    amount: 500,
    date: "Feb 22, 2024",
    type: "credit",
    category: "Transfer",
    icon: ArrowDownLeft,
    color: "text-green-600 bg-green-100",
  },
];

const TransactionItem = ({ transaction }) => {
  const Icon = transaction.icon;

  return (
    <div className="mb-3">
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${transaction.color}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-sm">{transaction.title}</h3>
              <p className="text-xs text-muted-foreground">
                {transaction.description}
              </p>
              <p className="text-xs mt-1 text-muted-foreground">
                {transaction.date}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={`font-medium ${
                transaction.type === "credit"
                  ? "text-green-600"
                  : "text-foreground"
              }`}
            >
              {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
            </p>
            <Badge variant="outline" className="mt-1 text-xs">
              {transaction.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Transactions = () => {
  return (
    <Layout>
      <div className="space-y-6 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions"
            className="pl-9 bg-white border-none rounded-full"
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">This month</p>
            <div className="flex items-center gap-4 mt-1">
              <div>
                <p className="text-xs text-muted-foreground">Income</p>
                <p className="text-green-600 font-medium">+₹45,500</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expense</p>
                <p className="font-medium">-₹5,997</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#66d6fe] rounded-full">
            <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
            <TabsTrigger value="income" className="rounded-full">Income</TabsTrigger>
            <TabsTrigger value="expense" className="rounded-full">Expense</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <ScrollArea className="h-[calc(100vh-320px)]">
              <div className="space-y-1">
                {transactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="income" className="mt-0">
            <ScrollArea className="h-[calc(100vh-320px)]">
              <div className="space-y-1">
                {transactions
                  .filter((t) => t.type === "credit")
                  .map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="expense" className="mt-0">
            <ScrollArea className="h-[calc(100vh-320px)]">
              <div className="space-y-1">
                {transactions
                  .filter((t) => t.type === "debit")
                  .map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Transactions;
