"use client";

import { useSearchParams } from "next/navigation";
import AuthCard from "@/components/auth/AuthCard";
import { BookOpen } from "lucide-react";
export default function AuthPage() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") || "login";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-700 to-red-500">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white/50 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-white/30 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="w-full max-w-md relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                <BookOpen />
              </span>
            </div>
            <span className="text-2xl font-bold font-poppins text-white">
              QuestionBanks
            </span>
          </div>
          <p className="text-white text-sm md:text-base font-medium">
            Join thousands of successful students
          </p>
        </div>

        <AuthCard defaultTab={defaultTab} />

        <div className="text-center mt-8">
          <p className="text-white text-sm">
            Trusted by 50,000+ students worldwide
          </p>
        </div>
      </div>
    </main>
  );
}
