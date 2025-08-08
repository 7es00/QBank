"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import QuestionBankCard from "./QuestionBankCard";
import Input from "@/components/ui/input";
import mathIcon from "@/assets/math-icon.jpg";
import programmingIcon from "@/assets/programming-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import { Button } from "../ui/button";

export default function QuestionBanksSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const questionBanks = [
    {
      id: "1",
      title: "Advanced Mathematics Mastery",
      description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts for competitive exams.",
      image: mathIcon.src,
      price: 29.99,
      rating: 4.8,
      totalQuestions: 850,
      enrolledUsers: 12450,
      category: "Mathematics",
      level: "Advanced" as const,
      duration: "3 months",
    },
    {
      id: "2",
      title: "Programming Fundamentals",
      description: "Master the basics of programming with questions covering Python, JavaScript, and data structures for beginners.",
      image: programmingIcon.src,
      price: 19.99,
      rating: 4.6,
      totalQuestions: 650,
      enrolledUsers: 8900,
      category: "Programming",
      level: "Beginner" as const,
      duration: "2 months",
    },
    {
      id: "3",
      title: "Computer Science Essentials",
      description: "Advanced programming concepts, algorithms, and system design questions for intermediate to advanced developers.",
      image: programmingIcon.src,
      price: 39.99,
      rating: 4.9,
      totalQuestions: 1200,
      enrolledUsers: 15600,
      category: "Programming",
      level: "Advanced" as const,
      duration: "4 months",
    },
    {
      id: "4",
      title: "Physics for Engineers",
      description: "Comprehensive physics question bank covering mechanics, thermodynamics, and electrical engineering concepts.",
      image: scienceIcon.src,
      price: 24.99,
      rating: 4.7,
      totalQuestions: 750,
      enrolledUsers: 10200,
      category: "Science",
      level: "Intermediate"  as const,
      duration: "3 months",
    },
    {
      id: "5",
      title: "Chemistry Fundamentals",
      description: "Essential chemistry concepts, reactions, and laboratory techniques for students and professionals.",
      image: scienceIcon.src,
      price: 22.99,
      rating: 4.5,
      totalQuestions: 600,
      enrolledUsers: 7800,
      category: "Science",
      level: "Beginner" as const,
      duration: "2 months",
    },
    {
      id: "6",
      title: "Data Science & Analytics",
      description: "Comprehensive coverage of statistics, machine learning, and data analysis techniques for modern professionals.",
      image: programmingIcon.src,
      price: 34.99,
      rating: 4.8,
      totalQuestions: 950,
      enrolledUsers: 13400,
      category: "Programming",
      level: "Advanced" as const,
      duration: "4 months",
    },
  ];

  const filteredBanks = questionBanks.filter((bank) => {
    const search = searchQuery.toLowerCase();
    return (
      bank.title.toLowerCase().includes(search) ||
      bank.description.toLowerCase().includes(search) ||
      bank.category.toLowerCase().includes(search)
    );
  });

  return (
    <section id="QuestionBankSection" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-educational">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-4">
            <span className="text-gray-900">Explore Our</span>
            <span className="text-hero-gradient font-semibold"> Question Banks</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Choose from hundreds of expertly crafted question banks designed to help you master any subject
          </p>
        </div>

        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search question banks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-black rounded-xl border border-gray-200 focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredBanks.map((bank) => (
            <QuestionBankCard key={bank.id} {...bank} />
          ))}
        </div>

        {filteredBanks.length > 0 && (
          <div className="text-center mt-12 animate-fade-in-up">
            <Button className="cursor-pointer bg-[#f8f8f8] text-gray-800 text-sm px-6 py-2 rounded-md border border-gray-200 hover:bg-[#f0f0f0] transition-colors shadow-none">
              Load More Question Banks
            </Button>
          </div>
        )}

        {filteredBanks.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No question banks found
            </h3>
            <p className="text-gray-500 mb-4">Try adjusting your search</p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-[#f8f8f8] text-gray-800 px-6 py-2 rounded-full text-sm transition-colors hover:bg-[#f0f0f0]"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
