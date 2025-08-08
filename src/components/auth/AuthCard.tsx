"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthCard({ defaultTab }: { defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="p-8 bg-white rounded-xl shadow-xl w-full max-w-md">
      <div className="flex w-full mb-8 rounded-xl overflow-hidden bg-gray-100 p-1">
        <button
          className={`cursor-pointer w-1/2 py-2 font-medium text-sm rounded-lg transition-all ${
            activeTab === "login"
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Sign In
        </button>
        <button
          className={`cursor-pointer w-1/2 py-2 font-medium text-sm rounded-lg transition-all ${
            activeTab === "register"
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Sign Up
        </button>
      </div>
      {activeTab === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}
