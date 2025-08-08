"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react"

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register:", registerData)
  }

  return (
    <form onSubmit={handleRegister} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Enter your full name"
            value={registerData.name}
            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            required
            className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
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
            placeholder="Create a password"
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
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

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={registerData.confirmPassword}
            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
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

      <div className="flex items-start space-x-2 text-sm text-gray-600">
        <input type="checkbox" className="cursor-pointer rounded border-gray-300 mt-1" required />
        <span>
          I agree to the <a href="#" className="text-pink-600 hover:underline">Terms of Service</a> and
          <a href="#" className="text-pink-600 hover:underline ml-1">Privacy Policy</a>
        </span>
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full text-white text-lg font-semibold py-3 rounded-xl bg-gradient-to-r from-pink-700 to-red-500 hover:opacity-90 transition shadow-lg"
      >
        Create Account →
      </button>
    </form>
  )
}
