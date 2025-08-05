import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, User, ShoppingBag, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = [
    { name: "Question Banks", href: "#", current: true },
    { name: "My Banks", href: "#my-banks", current: false },
    { name: "Features", href: "#features", current: false },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container-educational">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QuestionBanks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.current
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart
                  <Badge variant="secondary" className="ml-2">2</Badge>
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button className="btn-primary">
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      item.current
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t pt-4 space-y-2">
                  {isLoggedIn ? (
                    <>
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Cart
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" className="w-full">
                        Login
                      </Button>
                      <Button className="btn-primary w-full">
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;