import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRightLeft,
  CalendarIcon,
  Film,
  Plane,
  Ticket,
  Train,
} from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Bookings = () => {
  const [date, setDate] = useState();
  const [returnDate, setReturnDate] = useState();

  return (
    <Layout>
      <div className="space-y-6 py-20">
        <Tabs defaultValue="flights" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#66d6fe] rounded-full">
            <TabsTrigger
              value="flights"
              className="flex gap-1 items-center rounded-full"
            >
              <Plane className="h-4 w-4" />
              <span className="hidden sm:inline">Flights</span>
            </TabsTrigger>
            <TabsTrigger
              value="trains"
              className="flex gap-1 items-center rounded-full"
            >
              <Train className="h-4 w-4" />
              <span className="hidden sm:inline">Trains</span>
            </TabsTrigger>
            <TabsTrigger
              value="movies"
              className="flex gap-1 items-center rounded-full"
            >
              <Film className="h-4 w-4" />
              <span className="hidden sm:inline">Movies</span>
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="flex gap-1 items-center rounded-full"
            >
              <Ticket className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-6">
            <Card>
              <CardContent className="p-4">
                <Tabs defaultValue="oneway">
                  <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#66d6fe] rounded-full">
                    <TabsTrigger value="oneway" className="rounded-full">
                      One Way
                    </TabsTrigger>
                    <TabsTrigger value="roundtrip" className="rounded-full">
                      Round Trip
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="oneway" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          From
                        </label>
                        <Input placeholder="Delhi" className="rounded-full" />
                      </div>
                      <ArrowRightLeft className="mt-6" />
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          To
                        </label>
                        <Input placeholder="Mumbai" className="rounded-full" />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          Departure
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal rounded-full",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-white"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          Travelers
                        </label>
                        <Input
                          type="number"
                          defaultValue={1}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-[#002970] hover:bg-[#002970] cursor-pointer rounded-full">
                      Search Flights
                    </Button>
                  </TabsContent>

                  <TabsContent value="roundtrip" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          From
                        </label>
                        <Input placeholder="Delhi" className="rounded-full" />
                      </div>
                      <ArrowRightLeft className="mt-6" />
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          To
                        </label>
                        <Input placeholder="Mumbai" className="rounded-full" />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          Departure
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal rounded-full",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-white"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-medium mb-1 block">
                          Return
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal rounded-full",
                                !returnDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {returnDate ? (
                                format(returnDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-white"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={setReturnDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Travelers
                      </label>
                      <Input
                        type="number"
                        defaultValue={1}
                        className="rounded-full"
                      />
                    </div>

                    <Button className="w-full bg-[#002970] hover:bg-[#002970] cursor-pointer rounded-full">
                      Search Flights
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trains" className="mt-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">
                      From
                    </label>
                    <Input placeholder="New Delhi" className="rounded-full" />
                  </div>
                  <ArrowRightLeft className="mt-6" />
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">To</label>
                    <Input
                      placeholder="Mumbai Central"
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">
                      Travel Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal rounded-full",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">
                      Class
                    </label>
                    <Input placeholder="All Classes" className="rounded-full" />
                  </div>
                </div>

                <Button className="w-full bg-[#002970] hover:bg-[#002970] cursor-pointer rounded-full">
                  Search Trains
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="movies" className="mt-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">City</label>
                  <Input placeholder="Select city" className="rounded-full" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["Today", "Tomorrow", "Weekend"].map((day) => (
                    <Button
                      key={day}
                      variant="outline"
                      className="rounded-full"
                    >
                      {day}
                    </Button>
                  ))}
                </div>

                <Button className="w-full bg-[#002970] hover:bg-[#002970] cursor-pointer rounded-full">
                  Browse Movies
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">City</label>
                  <Input placeholder="Select city" className="rounded-full" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Event Category
                  </label>
                  <Input
                    placeholder="All Categories"
                    className="rounded-full"
                  />
                </div>

                <Button className="w-full bg-[#002970] hover:bg-[#002970] cursor-pointer rounded-full">
                  Find Events
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Bookings;
