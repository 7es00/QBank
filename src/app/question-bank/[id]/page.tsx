"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Star,
  Users,
  BookOpen,
  CheckCircle,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";
import type { QuestionBank } from "@/types/questionBank";

export default function QuestionBankDetailPage() {
  const params = useParams();
  const questionBankId = params.id as string;

  const questionBank: QuestionBank = {
    id: questionBankId,
    title: "Advanced Mathematics Mastery",
    description:
      "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts for competitive exams. This course is designed for students who want to master complex mathematical topics and prepare for advanced level examinations.",
    image: "/math-icon.jpg",
    price: 29.99,
    rating: 4.8,
    totalQuestions: 850,
    enrolledUsers: 12450,
    category: "Mathematics",
    level: "Advanced",
    duration: "3 months",
  };

  const features = [
    "850 carefully crafted questions",
    "Instant feedback and explanations",
    "Progress tracking and analytics",
    "Mobile-friendly interface",
    "Expert-curated content",
    "Lifetime access",
  ];

  const topics = [
    "Calculus & Differential Equations",
    "Linear Algebra & Matrices",
    "Probability & Statistics",
    "Number Theory",
    "Geometry & Trigonometry",
    "Mathematical Logic",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container-educational section-padding">
        <div className="mb-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Question Banks
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {questionBank.category}
                </Badge>
                <Badge
                  className={`${
                    questionBank.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : questionBank.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {questionBank.level}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
                {questionBank.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                {questionBank.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-gray-900">
                    {questionBank.totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-gray-900">
                    {questionBank.duration}
                  </div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-gray-900">
                    {questionBank.rating}
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-gray-900">
                    {questionBank.enrolledUsers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
                What you'll get
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-4">
                Topics covered
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border"
                  >
                    <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${questionBank.price}
                    <span className="text-lg font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{questionBank.rating} rating</span>
                    <span>•</span>
                    <span>
                      {questionBank.enrolledUsers.toLocaleString()} students
                    </span>
                  </div>
                </div>
                <Button className="w-full btn-primary mb-4">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy
                </Button>

                <Button variant="outline" className="w-full">
                  Preview Questions
                </Button>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Access</span>
                    <span>Lifetime</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Updates</span>
                    <span>Included</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Certificate</span>
                    <span>Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
