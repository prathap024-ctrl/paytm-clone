import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CreditCard,
  Smartphone,
  Shield,
  Wallet,
} from "lucide-react";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const MoreFeatures = () => {
  return (
    <div className="min-h-auto bg-gray-100">
      {/* Hero Section */}
      <section className="bg-[#2f82ed] text-[#e8f8fd] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Long-term Wealth & Achieve your Goals.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Investing in Mutual Funds is transparent, low-cost & easy. Payments
          App helps you create wealth & realize your dreams.
        </p>
        <Button className="cursor-pointer text-white bg-[#002970] hover:bg-[#002970] rounded-full font-semibold py-3 px-6">
          Learn More <ArrowRight />
        </Button>
      </section>

      {/* Card Sections */}
      <section className="py-12 px-4 bg-[#e8f8fd]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Card 1: One Destination */}
          <div className="h-full">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <CreditCard className="mr-2 text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                  One Destination for Travel & Recharge Cards
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Payments App offers a wide range of travel and recharge cards
                  for your convenience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={images.TravelImage}
                  alt="Travel Card"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="mt-auto">
                <Link to="/bookings">
                  <Button variant="link" className="text-sm sm:text-base cursor-pointer">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Card 2: Insurance */}
          <div className="h-full">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Shield className="mr-2 text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                  Insurance Made Easy, Payments Way
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Payments App Insurance removes the hassle & confusion.
                  Payments App Insurance removes the hassle & confusion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={images.insuranceImage}
                  alt="Travel Card"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="mt-auto">
                <Link to="/#">
                  <Button variant="link" className="text-sm sm:text-base cursor-pointer">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Card 3: Pay Anyone */}
          <div className="h-full">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Wallet className="mr-2 text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                  Pay Anyone Directly from Your Bank
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Pay anyone, everywhere. Make contactless & secure payments
                  in-stores or online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={images.PayAnyone}
                  alt="Travel Card"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="mt-auto">
                <Link to="/send-money">
                  <Button variant="link" className="text-sm sm:text-base cursor-pointer">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Card 4: Accept Payments */}
          <div className="h-full">
            <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Smartphone className="mr-2 text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                  Accept Payments Online & Offline
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Accept payments from customers using Payments App QR codes at
                  your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={images.onlineofflinePay}
                  alt="Travel Card"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="mt-auto">
                <Link to="/send-money">
                  <Button variant="link" className="text-sm sm:text-base cursor-pointer">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreFeatures;
