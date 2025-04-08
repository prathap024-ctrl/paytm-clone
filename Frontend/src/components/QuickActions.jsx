import {
  Banknote,
  ReceiptIndianRupee,
  QrCode,
  Zap,
  Tv,
  CreditCard,
  Train,
  Plane,
  Film,
  MoreHorizontal,
  Ticket,
  History,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Action = ({
  icon: Icon,
  label,
  path,
  color = "bg-white text-primary",
}) => (
  <div>
    <Link to={path} className="flex flex-col items-center gap-2 w-16">
      <div
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-sm`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-xs text-center text-balance font-medium">
        {label}
      </span>
    </Link>
  </div>
);

export const QuickActions = () => {
  const paymentActions = [
    { icon: Banknote, label: "Send Money", path: "/sendmoney", delay: 0 },
    { icon: QrCode, label: "Scan & Pay", path: "/scan-and-pay", delay: 1 },
    {
      icon: ReceiptIndianRupee,
      label: "Request",
      path: "/request-money",
      delay: 2,
    },
    {
      icon: History,
      label: "Payments History",
      path: "/payment-history",
      delay: 3,
    },
    {
      icon: Zap,
      label: "Electricity",
      path: "/bill-payment",
      delay: 4,
    },
    { icon: Tv, label: "DTH", path: "/recharge-bills", delay: 5 },
    {
      icon: CreditCard,
      label: "Credit Card",
      path: "/credit-card-bills",
      delay: 6,
    },
    { icon: MoreHorizontal, label: "More", path: "/more-services", delay: 7 },
  ];

  const bookingActions = [
    {
      icon: Train,
      label: "Train",
      path: "/bookings",
      color: "bg-blue-100 text-blue-600",
      delay: 0,
    },
    {
      icon: Plane,
      label: "Flights",
      path: "/bookings",
      color: "bg-purple-100 text-purple-600",
      delay: 1,
    },
    {
      icon: Film,
      label: "Movies",
      path: "/bookings",
      color: "bg-red-100 text-red-600",
      delay: 2,
    },
    {
      icon: Ticket,
      label: "Events",
      path: "/bookings",
      color: "bg-yellow-100 text-yellow-600",
      delay: 3,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-4 flex items-center">
          <span className="bg-white text-primary p-1 rounded-md mr-2">
            <Banknote className="h-4 w-4" />
          </span>
          Payments
        </h3>
        <ScrollArea className="pb-4">
          <div className="flex gap-6 py-2">
            {paymentActions.map((action, i) => (
              <Action key={action.label} {...action} delay={i} />
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="font-medium mb-4 flex items-center">
          <span className="bg-blue-50 text-blue-600 p-1 rounded-md mr-2">
            <Plane className="h-4 w-4" />
          </span>
          Book & Buy
        </h3>
        <ScrollArea className="pb-4">
          <div className="flex gap-6 py-2">
            {bookingActions.map((action, i) => (
              <Action key={action.label} {...action} delay={i} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
