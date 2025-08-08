"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", loginData)
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
            className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
            className="pl-10 pr-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="cursor-pointer rounded border-gray-300" />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-pink-600 hover:underline">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full text-white text-lg font-semibold py-3 rounded-xl bg-gradient-to-r from-pink-700 to-red-500 hover:opacity-90 transition shadow-lg"
      >
        Sign In →
      </button>
    </form>
  )
}
