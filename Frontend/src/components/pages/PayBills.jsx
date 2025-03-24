import React from 'react'
import { Layout } from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Phone,
  Tv,
  CreditCard,
  Droplet,
  Wifi,
  CalendarClock,
  Search
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const BillProvider = ({
  icon,
  name,
  color = "bg-primary/10 text-primary"
}) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center animate-scale-in`}
    >
      {icon && React.createElement(icon, { className: "h-6 w-6" })}
    </div>
    <span className="text-xs text-center text-balance">{name}</span>
  </div>
)

const PayBills = () => {
  const recentBills = [
    {
      id: "b1",
      name: "Airtel Postpaid",
      amount: 999,
      dueDate: "28 Feb 2024",
      icon: Phone,
      color: "bg-red-100 text-red-600"
    },
    {
      id: "b2",
      name: "Tata Power",
      amount: 1450,
      dueDate: "03 Mar 2024",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: "b3",
      name: "Tata Sky DTH",
      amount: 599,
      dueDate: "10 Mar 2024",
      icon: Tv,
      color: "bg-blue-100 text-blue-600"
    }
  ]

  const utilityProviders = [
    { icon: Zap, name: "Electricity", color: "bg-yellow-100 text-yellow-600" },
    { icon: Phone, name: "Mobile", color: "bg-red-100 text-red-600" },
    { icon: Tv, name: "DTH", color: "bg-blue-100 text-blue-600" },
    { icon: Droplet, name: "Water", color: "bg-cyan-100 text-cyan-600" },
    { icon: Wifi, name: "Broadband", color: "bg-purple-100 text-purple-600" },
    {
      icon: CalendarClock,
      name: "Insurance",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      name: "Credit Card",
      color: "bg-slate-100 text-slate-600"
    }
  ]

  return (
    <Layout>
      <div className="space-y-6 py-20">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for a biller"
            className="pl-9 bg-secondary border-none"
          />
        </div>

        <Tabs defaultValue="utilities" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>

          <TabsContent value="utilities" className="mt-0">
            <ScrollArea className="pb-4">
              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {utilityProviders.map(provider => (
                  <BillProvider key={provider.name} {...provider} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="financial" className="mt-0">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <BillProvider
                icon={CreditCard}
                name="Credit Card"
                color="bg-slate-100 text-slate-600"
              />
              <BillProvider
                icon={CalendarClock}
                name="Loan"
                color="bg-green-100 text-green-600"
              />
              <BillProvider
                icon={CalendarClock}
                name="Insurance"
                color="bg-blue-100 text-blue-600"
              />
            </div>
          </TabsContent>

          <TabsContent value="others" className="mt-0">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <BillProvider
                icon={CalendarClock}
                name="Municipal Tax"
                color="bg-purple-100 text-purple-600"
              />
              <BillProvider
                icon={CalendarClock}
                name="Education Fee"
                color="bg-orange-100 text-orange-600"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <h3 className="font-medium mb-4">Upcoming & Due Bills</h3>
          <div className="space-y-3">
            {recentBills.map(bill => (
              <Card key={bill.id} className="animate-fade-in">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${bill.color}`}
                    >
                      <bill.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-sm">{bill.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Due: {bill.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-medium">₹{bill.amount}</p>
                    <Button variant="outline" size="sm" className="mt-1">
                      Pay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PayBills
