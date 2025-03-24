import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Plus,
  Wallet as WalletIcon,
  QrCode,
  Landmark,
  Send,
  Receipt,
} from "lucide-react";

const Wallet = () => {
  const cards = [
    {
      id: "c1",
      name: "HDFC Credit Card",
      number: "**** **** **** 4567",
      expires: "05/27",
      type: "visa",
      color: "from-blue-700 to-blue-900",
    },
    {
      id: "c2",
      name: "ICICI Debit Card",
      number: "**** **** **** 8912",
      expires: "09/25",
      type: "mastercard",
      color: "from-purple-700 to-purple-900",
    },
  ];

  const banks = [
    {
      id: "b1",
      name: "HDFC Bank",
      accountNumber: "**** 4567",
      ifsc: "HDFC0000123",
      primary: true,
    },
    {
      id: "b2",
      name: "ICICI Bank",
      accountNumber: "**** 8912",
      ifsc: "ICIC0000789",
      primary: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <Layout>
      <div className="space-y-6 py-20">
        <div className="flex flex-col gap-4">
          <div>
            <Card className="bg-gradient-to-br from-primary to-primary-foreground text-primary-foreground overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-80">Available Balance</p>
                    <h3 className="text-3xl font-bold mt-1">₹24,500.75</h3>
                  </div>
                  <WalletIcon className="h-10 w-10 opacity-80" />
                </div>

                <div className="flex justify-between mt-8 gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1 gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Money</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1 gap-1"
                  >
                    <Send className="h-4 w-4" />
                    <span>Transfer</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex-1 gap-1"
                  >
                    <QrCode className="h-4 w-4" />
                    <span>QR Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="cards" className="mt-6">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="cards" className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                <span>Cards</span>
              </TabsTrigger>
              <TabsTrigger value="banks" className="flex items-center gap-1">
                <Landmark className="h-4 w-4" />
                <span>Bank Accounts</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="mt-0">
              <div variants={containerVariants} className="space-y-3">
                {cards.map((card) => (
                  <div key={card.id} variants={itemVariants}>
                    <Card
                      className={`overflow-hidden bg-gradient-to-r ${card.color}`}
                    >
                      <CardContent className="p-5 text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm opacity-80">{card.name}</p>
                            <p className="text-lg font-mono mt-2">
                              {card.number}
                            </p>
                            <p className="text-xs mt-3 opacity-80">
                              VALID THRU {card.expires}
                            </p>
                          </div>
                          <div className="mt-1">
                            {card.type === "visa" ? (
                              <p className="text-xl font-serif italic">VISA</p>
                            ) : (
                              <p className="text-xl font-serif">MasterCard</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-4 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add New Card</span>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="banks" className="mt-0">
              <div className="space-y-3">
                {banks.map((bank) => (
                  <div key={bank.id} variants={itemVariants}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Landmark className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{bank.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Acc: {bank.accountNumber}
                            </p>
                          </div>
                        </div>
                        {bank.primary && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            Primary
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-4 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Link New Account</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Recent Activities</h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-center items-center py-6 text-muted-foreground flex-col gap-2">
                  <Receipt className="h-10 w-10 opacity-50" />
                  <p>No recent wallet transactions</p>
                  <Button variant="link" size="sm">
                    View all transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
