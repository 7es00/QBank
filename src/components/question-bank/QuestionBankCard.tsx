import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CircleDollarSign } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface QuestionBankCardProps {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  price: number;
  totalQuestions: number;
  enrolledUsers: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

export default function QuestionBankCard({
  title,
  description,
  image,
  price,
  totalQuestions,
  enrolledUsers,
  category,
  level,
  duration,
}: QuestionBankCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="card-question-bank group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={typeof image === "string" ? image : image.src}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge className={`${getLevelColor(level)} border-0`}>{level}</Badge>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold font-poppins text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center text-gray-500 space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div>
            <span className="font-bold">{totalQuestions}</span>
            <span> Questions</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM21 7a3 3 0 11-6 0 3 3 0 016 0zM3 7a3 3 0 116 0 3 3 0 01-6 0z"
            />
          </svg>
          <span>{enrolledUsers.toLocaleString()} students enrolled</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold text-gray-900">
            ${price}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </div>
          <Button className="btn-primary">
            <CircleDollarSign className="w-4 h-4 mr-2" />
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
