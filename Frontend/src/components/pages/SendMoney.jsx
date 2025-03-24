import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, Star, Clock, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const contacts = [
  {
    id: "c1",
    name: "Rahul Sharma",
    phone: "9876543210",
    upiId: "rahul@paytm",
    isFavorite: true,
    recentTransaction: "Yesterday",
  },
  {
    id: "c2",
    name: "Priya Singh",
    phone: "9876543211",
    upiId: "priya@okaxis",
    isFavorite: true,
    recentTransaction: "2 days ago",
  },
  {
    id: "c3",
    name: "Amit Kumar",
    phone: "9876543212",
    upiId: "amit@ybl",
    isFavorite: false,
  },
  {
    id: "c4",
    name: "Deepika Patel",
    phone: "9876543213",
    upiId: "deepika@paytm",
    isFavorite: false,
    recentTransaction: "Last week",
  },
  {
    id: "c5",
    name: "Vikas Gupta",
    phone: "9876543214",
    upiId: "vikas@okicici",
    isFavorite: false,
  },
  {
    id: "c6",
    name: "Sneha Reddy",
    phone: "9876543215",
    upiId: "sneha@upi",
    isFavorite: false,
  },
  {
    id: "c7",
    name: "Ravi Verma",
    phone: "9876543216",
    upiId: "ravi@paytm",
    isFavorite: false,
  },
  {
    id: "c8",
    name: "Neha Sharma",
    phone: "9876543217",
    upiId: "neha@ybl",
    isFavorite: true,
    recentTransaction: "Last month",
  },
];

const ContactItem = ({ contact }) => (
  <div className="flex items-center justify-between p-4 hover:bg-secondary rounded-lg transition-colors">
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <User className="h-5 w-5" />
      </div>
      <div className="ml-3">
        <h4 className="font-medium">{contact.name}</h4>
        <p className="text-xs text-muted-foreground">{contact.upiId}</p>
      </div>
    </div>
    <Button
      size="sm"
      className="text-[#e8f8fd] bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full hover:bg-[#002970] transition"
    >
      Pay
    </Button>
  </div>
);

const SendMoney = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.upiId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  );

  const favorites = filteredContacts.filter((contact) => contact.isFavorite);
  const recents = filteredContacts.filter(
    (contact) => contact.recentTransaction
  );
  const allContacts = filteredContacts;

  return (
    <Layout>
      <div className="space-y-6 py-20">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, phone or UPI ID"
            className="pl-9 bg-white border-none rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="glass rounded-xl p-4 animate-scale-in">
          <h3 className="font-medium mb-3">Pay by UPI ID / Number</h3>
          <Input
            placeholder="Enter UPI ID or Mobile Number"
            className="mb-3 bg-white rounded-full"
          />
          <Button className="w-full text-[#e8f8fd] bg-[#002970] hover:bg-[#002970] cursor-pointer font-semibold py-3 px-6 rounded-full transition">
            Proceed to Pay
          </Button>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#66d6fe] rounded-full">
            <TabsTrigger value="all" className="flex items-center gap-1 rounded-full">
              <Users className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-1 rounded-full">
              <Star className="h-4 w-4" />
              <span>Favorites</span>
            </TabsTrigger>
            <TabsTrigger value="recents" className="flex items-center gap-1 rounded-full">
              <Clock className="h-4 w-4" />
              <span>Recents</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {allContacts.map((contact) => (
                  <ContactItem key={contact.id} contact={contact} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="favorites" className="mt-0">
            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {favorites.length > 0 ? (
                  favorites.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                  ))
                ) : (
                  <p className="text-center py-8 text-muted-foreground">
                    No favorite contacts found
                  </p>
                )}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="recents" className="mt-0">
            <ScrollArea className="h-[400px]">
              <div className="space-y-1">
                {recents.length > 0 ? (
                  recents.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                  ))
                ) : (
                  <p className="text-center py-8 text-muted-foreground">
                    No recent transactions
                  </p>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SendMoney;
