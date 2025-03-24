import { Home, Send, CreditCard, Calendar, User } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export const BottomTabs = () => {
  const location = useLocation()

  const tabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Send, label: "Send", path: "/send-money" },
    { icon: CreditCard, label: "Pay Bills", path: "/pay-bills" },
    { icon: Calendar, label: "Book", path: "/bookings" },
    { icon: User, label: "Profile", path: "/profile" }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 glass border-t z-10">
      <div className="container">
        <nav className="flex items-center justify-around h-16">
          {tabs.map(tab => {
            const isActive = location.pathname === tab.path
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex flex-col items-center justify-center w-full h-full transition-all ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <tab.icon
                  className={`h-5 w-5 ${isActive ? "animate-scale-in" : ""}`}
                />
                <span className="text-xs mt-1">{tab.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
