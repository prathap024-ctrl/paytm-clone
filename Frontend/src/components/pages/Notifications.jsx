import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, CreditCard, ArrowDownLeft, Zap, BadgeCheck } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  {
    id: "n1",
    title: "Payment Successful",
    message: "Your payment of ₹1,499 to Amazon was successful.",
    time: "Just now",
    icon: BadgeCheck,
    read: false,
    color: "text-green-600 bg-green-100",
  },
  {
    id: "n2",
    title: "Money Received",
    message: "Rahul Sharma sent you ₹2,000.",
    time: "2 hours ago",
    icon: ArrowDownLeft,
    read: false,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: "n3",
    title: "Bill Due Reminder",
    message: "Your electricity bill of ₹1,450 is due tomorrow.",
    time: "Yesterday",
    icon: Zap,
    read: true,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    id: "n4",
    title: "Card Transaction",
    message: "Your credit card was used for a purchase of ₹899 at Flipkart.",
    time: "2 days ago",
    icon: CreditCard,
    read: true,
    color: "text-purple-600 bg-purple-100",
  },
  {
    id: "n5",
    title: "Security Alert",
    message:
      "A new device was used to access your account. Please verify if it was you.",
    time: "3 days ago",
    icon: Bell,
    read: true,
    color: "text-red-600 bg-red-100",
  },
];

const NotificationItem = ({ notification }) => {
  const Icon = notification.icon;

  return (
    <div
      className={`mb-3 ${
        !notification.read ? "border-l-4 border-primary" : ""
      }`}
    >
      <Card
        className={`overflow-hidden ${
          !notification.read ? "bg-primary/5" : ""
        }`}
      >
        <CardContent className="p-4 flex gap-3">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${notification.color}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3
                className={`text-sm font-medium ${
                  !notification.read ? "text-primary" : ""
                }`}
              >
                {notification.title}
              </h3>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
            <p className="text-sm mt-1 text-muted-foreground">
              {notification.message}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Notifications = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Layout>
      <div className="space-y-6 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <span className="text-sm text-muted-foreground">
            {unreadCount} unread
          </span>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-1">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Notifications;
