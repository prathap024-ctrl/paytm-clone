import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Download,
  UserCircle2Icon,
  Menu,
  ChevronRight,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const mobileMenuItems = [
    {
      label: "Ticket Booking",
      path: "/bookings",
      items: [
        { label: "Bus", path: "/bookings" },
        { label: "Train", path: "/bookings" },
        { label: "Flight", path: "/bookings" },
        { label: "Movies", path: "/bookings" },
      ],
    },
    {
      label: "Recharge & Bills",
      path: "/recharge-bills",
      items: [
        { label: "Mobile", path: "/recharge-bills" },
        { label: "DTH", path: "/recharge-bills" },
        { label: "Electricity", path: "/bill-payment" },
        { label: "Water", path: "/bill-payment" },
      ],
    },
    {
      label: "Payments & Services",
      path: "/payments-services",
      items: [
        { label: "Transfer", path: "/send-money" },
        { label: "UPI", path: "/send-money" },
        { label: "Wallet", path: "/send-money" },
        { label: "Cards", path: "/send-money" },
      ],
    },
    {
      label: "Paytm for Business",
      path: "/business",
      items: [
        { label: "Merchant", path: "/business/merchant" },
        { label: "POS", path: "/business/pos" },
        { label: "QR", path: "/business/qr" },
        { label: "Analytics", path: "/business/analytics" },
      ],
    },
    {
      label: "Company",
      path: "/company",
      items: [
        { label: "About", path: "/company/about" },
        { label: "Careers", path: "/company/careers" },
        { label: "News", path: "/company/news" },
        { label: "Contact", path: "/company/contact" },
      ],
    },
  ];

  const handleSubmenuToggle = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleBack = () => {
    navigate(-1);
  };

  const [user, setUser] = useState();

  // Check if user is authenticated
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios
          .get("http://localhost:5520/api/v2/user/currentuser", {
            withCredentials: true,
          })
          .then((response) => {
            setUser(response.data);
            console.log(response);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error("Fetch user failed", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  // Logout Handler
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5520/api/v2/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null); // Remove user from state
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <nav className="outline-none w-full h-16 px-5 py-4 shadow-lg flex items-center bg-white fixed top-0 z-50">
        {!isHomePage && (
          <Button
            onClick={handleBack}
            className="mr-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        <div className="w-full flex items-center justify-between text-sm">
          {/* Logo */}
          <div>
            <Link to="/">
              <h1 className="text-xl font-semibold">Payments App</h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 lg:px-5">
            {mobileMenuItems.map((menu) => (
              <DropdownMenu key={menu.label}>
                <DropdownMenuTrigger className="outline-none flex items-center gap-1 cursor-pointer font-semibold hover:text-[#00baf2] transition-colors">
                  <Link to={menu.path}>{menu.label}</Link>
                  <ChevronDown className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white rounded-xl shadow-lg border">
                  {menu.items.map((item) => (
                    <DropdownMenuItem
                      key={item.label}
                      className="cursor-pointer hover:bg-[#e8f8fd] hover:text-[#00baf2] px-4 py-2 transition-colors"
                    >
                      <Link to={item.path} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="https://play.google.com/store/apps/details?id=net.one97.paytm&pcampaignid=web_share">
              <Button
                variant="ghost"
                className="text-sm text-[#002970] rounded-full hover:bg-[#e8f8fd]"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Now
              </Button>
            </Link>
            {user ? (
              <Button
                onClick={handleLogout}
                className="bg-[#002970] text-white rounded-full hover:bg-[#003d96]"
              >
                <LogOut className="mr-2 w-5 h-5" />
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="bg-[#002970] text-white rounded-full hover:bg-[#003d96]">
                  <UserCircle2Icon className="mr-2 w-5 h-5" />
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full h-[40vh] bg-white shadow-lg z-50 overflow-y-auto">
            <div className="flex flex-col h-full p-2">
              {mobileMenuItems.map((menu) => (
                <div key={menu.label} className="relative">
                  <button
                    onClick={() => handleSubmenuToggle(menu.label)}
                    className="outline-none flex items-center justify-between w-full py-2 px-3 text-left font-semibold text-gray-800 hover:bg-gray-100 transition-colors border-b border-gray-200"
                  >
                    <Link to={menu.path}>{menu.label}</Link>
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Full-Screen Submenu */}
                  {activeSubmenu === menu.label && (
                    <div className="absolute top-0 left-0 w-full h-[40vh] bg-gray-50 z-10">
                      <div className="flex flex-col h-full">
                        {/* Submenu Header */}
                        <div className="flex items-center justify-between p-2 bg-white border-b border-gray-200">
                          <span className="font-semibold text-gray-800">
                            {menu.label}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            <X className="w-4 h-4 text-gray-600" />
                          </Button>
                        </div>

                        {/* Submenu Items */}
                        <div className="flex-1 overflow-y-auto px-3 py-1">
                          {menu.items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-[#e8f8fd] hover:text-[#00baf2] transition-colors border-b border-gray-200 last:border-b-0"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#00baf2]"></span>
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        {/* Submenu Action Buttons */}
                        <div className="p-2 bg-white border-t border-gray-200">
                          <Link
                            to="https://play.google.com/store/apps/details?id=net.one97.paytm&pcampaignid=web_share"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveSubmenu(null);
                            }}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-[#002970] hover:bg-[#e8f8fd] mb-1 text-sm"
                            >
                              <Download className="mr-2 w-4 h-4" />
                              Download Now
                            </Button>
                          </Link>
                          {user ? (
                            <Button
                              className="bg-[#002970] text-white rounded-full hover:bg-[#003d96]"
                              onClick={handleLogout}
                            >
                              <UserCircle2Icon className="mr-2 w-5 h-5" />
                              Logout
                            </Button>
                          ) : (
                            <Link
                              to="/login"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              <Button className="w-full justify-start bg-[#002970] text-white hover:bg-[#003d96] text-sm">
                                <UserCircle2Icon className="mr-2 w-4 h-4" />
                                Sign in
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Main Menu Action Buttons (Visible when no submenu is active) */}
              {activeSubmenu === null && (
                <div className="mt-auto p-2 border-t border-gray-200">
                  <Link
                    to="/download-page"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#002970] hover:bg-[#e8f8fd] mb-1 text-sm"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Now
                    </Button>
                  </Link>
                  <Link
                    to="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full justify-start bg-[#002970] text-white hover:bg-[#003d96] text-sm cursor-pointer">
                      <UserCircle2Icon className="mr-2 w-4 h-4" />
                      Sign in
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
