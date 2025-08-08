"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import heroEducation from "@/assets/hero-education.png";

export default function HeroSection() {
  function handleQuestionBankSectionClick() {
    const section = document.getElementById("QuestionBankSection");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 md:py-20 text-white">
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/20 animate-float z-0"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-white/30 animate-float z-0"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in-up space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">
                Trusted by 50,000+ Students
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Master Any Subject with
              <span className="block bg-clip-text text-[#F3729F]">
                Expert Question Banks
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-xl">
              Access premium question banks across multiple subjects. Practice
              with instant feedback, track your progress, and ace your exams
              with confidence.
            </p>

            <div>
              <Button
                onClick={handleQuestionBankSectionClick}
                className="cursor-pointer bg-white text-[#AF0936] hover:bg-white/90 px-6 py-3 rounded-xl font-semibold shadow transition"
              >
                Browse Question Banks
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  500+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Question Banks
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  50K+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  95%
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Success Rate
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              <Image
                src={heroEducation}
                alt="Educational Platform"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl"
                width={640}
                height={420}
                priority
              />

              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Question Banks
                    </div>
                    <div className="text-xs text-gray-500">850 Questions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-1 -right-6 bg-white rounded-xl p-4 shadow-lg animate-float-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      12,450
                    </div>
                    <div className="text-xs text-gray-500">Active Learners</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
