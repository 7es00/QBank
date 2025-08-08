"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: "Question Banks", href: "/" },
    { name: "My Banks", href: "/my-banks" },
  ];

  const goToLogin = () => router.push("/auth?tab=login");
  const goToSignUp = () => router.push("/auth?tab=register");

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-[999] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#AF0936] to-[#d1426b] flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins bg-gradient-to-r from-[#c03060] to-[#d1426b] bg-clip-text text-transparent">
              QuestionBanks
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium font-poppins transition-colors ${
                    isActive
                      ? "text-[#c26282]"
                      : "text-gray-600 hover:text-[#c26282]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer text-sm text-gray-600 font-medium hover:text-[#c26282] hover:bg-[#f6f2fd]"
                  onClick={goToLogin}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="cursor-pointer bg-[#AF0936] hover:bg-[#c03060] text-white px-6 py-2 rounded-xl text-sm font-medium shadow-md"
                  onClick={goToSignUp}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-sm font-medium font-poppins px-4 py-2 ${
                    isActive
                      ? "text-[#c26282]"
                      : "text-gray-600 hover:text-[#c26282]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            {!isLoggedIn && (
              <div className="px-4 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-gray-600 font-medium hover:text-[#c26282] hover:bg-[#f6f2fd]"
                  onClick={() => {
                    goToLogin();
                    setMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-[#AF0936] hover:bg-[#c03060] text-white rounded-xl font-medium"
                  onClick={() => {
                    goToSignUp();
                    setMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
