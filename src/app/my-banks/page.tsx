"use client";
import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock } from "lucide-react";

export default function MyBanksPage() {
  const myQuestionBanks = [
    {
      id: "1",
      title: "Advanced Mathematics Mastery",
      description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts.",
      image: "/math-icon.jpg",
      totalQuestions: 850,
      duration: "3 months",
    },
    {
      id: "2",
      title: "Programming Fundamentals",
      description: "Master the basics of programming with questions covering Python, JavaScript, and data structures.",
      image: "/programming-icon.jpg",
      totalQuestions: 650,
      duration: "2 months",
    },
    {
      id: "3",
      title: "Advanced Mathematics Mastery",
      description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts.",
      image: "/math-icon.jpg",
      totalQuestions: 850,
      duration: "3 months",
    },
    {
      id: "4",
      title: "Programming Fundamentals",
      description: "Master the basics of programming with questions covering Python, JavaScript, and data structures.",
      image: "/programming-icon.jpg",
      totalQuestions: 650,
      duration: "2 months",
    },{
      id: "5",
      title: "Advanced Mathematics Mastery",
      description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts.",
      image: "/math-icon.jpg",
      totalQuestions: 850,
      duration: "3 months",
    },
    {
      id: "6",
      title: "Programming Fundamentals",
      description: "Master the basics of programming with questions covering Python, JavaScript, and data structures.",
      image: "/programming-icon.jpg",
      totalQuestions: 650,
      duration: "2 months",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> 
      <Header />

      <main className="container-educational section-padding">
        <div className="mb-8 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
            My Question Banks
          </h1>
          <p className="text-lg text-gray-600">
            Access your purchased question banks and track your learning progress
          </p>
        </div>

        {myQuestionBanks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myQuestionBanks.map((bank) => (
              <div key={bank.id} className="card-question-bank group mb-8">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-poppins text-gray-900 group-hover:text-primary transition-colors">
                    {bank.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{bank.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center text-gray-500 space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{bank.duration}</span>
                    </div>
                    <div>
                      <span className="font-bold">{bank.totalQuestions}</span>
                      <span> Questions</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button className="btn-primary w-full">
                      Continue Learning
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-gray-400 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No question banks yet
            </h3>
            <p className="text-gray-500 mb-4">
              Start your learning journey by purchasing your first question bank
            </p>
            <Button className="btn-primary">Browse Question Banks</Button>
          </div>
        )}
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
