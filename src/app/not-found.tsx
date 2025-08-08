"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center relative" style={{ background: "linear-gradient(to right, #AF0936, #d1426b)" }}>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>

      <div className="bg-white text-[#AF0936] px-3 py-1 text-sm rounded rotate-12 absolute top-1/2 translate-y-[-50%] shadow-md">
        Page Not Found
      </div>

      <button className="mt-8">
        <Link
          href="/"
          className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>

          <span className="text-black relative block px-8 py-3 border border-white bg-transparent rounded-md">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  );
}
