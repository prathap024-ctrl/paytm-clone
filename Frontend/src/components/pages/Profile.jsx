import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  CreditCard,
  HelpCircle,
  LogOut,
  MapPin,
  Settings,
  Shield,
  User as UserIcon,
  Wallet
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

const ProfileOption = ({
  icon: Icon,
  label,
  description,
  path,
  color = "text-primary bg-primary/10"
}) => (
  <Link
    to={path}
    className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors"
  >
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="ml-3">
        <h4 className="font-medium text-sm">{label}</h4>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
    <ChevronRight className="h-4 w-4 text-muted-foreground" />
  </Link>
)

const Profile = () => {
  return (
    <Layout>
      <div className="space-y-6 py-20">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex items-center">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  AN
                </AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h2 className="font-medium text-lg">Aditya Narayan</h2>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                Edit
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="glass rounded-xl p-4 animate-scale-in">
          <h3 className="font-medium mb-4">Account & KYC</h3>
          <div className="space-y-1">
            <ProfileOption
              icon={UserIcon}
              label="Complete your KYC"
              description="Verify your identity to unlock full access"
              path="/kyc"
              color="text-orange-600 bg-orange-100"
            />
            <ProfileOption
              icon={Wallet}
              label="Payment Methods"
              description="Manage your payment options"
              path="/payment-methods"
              color="text-blue-600 bg-blue-100"
            />
            <ProfileOption
              icon={CreditCard}
              label="Cards & Bank Accounts"
              description="Manage your linked accounts"
              path="/linked-accounts"
              color="text-purple-600 bg-purple-100"
            />
          </div>
        </div>

        <div className="glass rounded-xl p-4 animate-scale-in animation-delay-200">
          <h3 className="font-medium mb-4">Settings & Privacy</h3>
          <div className="space-y-1">
            <ProfileOption
              icon={Settings}
              label="App Settings"
              description="Language, notifications, display"
              path="/settings"
              color="text-gray-600 bg-gray-100"
            />
            <ProfileOption
              icon={Shield}
              label="Privacy & Security"
              description="Manage your data and permissions"
              path="/privacy"
              color="text-green-600 bg-green-100"
            />
            <ProfileOption
              icon={HelpCircle}
              label="Help & Support"
              description="Get assistance and FAQs"
              path="/help"
              color="text-cyan-600 bg-cyan-100"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="text-destructive" size="lg">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
