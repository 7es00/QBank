import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Progress from "../ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export default function QuestionInterface() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());

  const questions = [
    {
      id: "1",
      question: "What is the derivative of f(x) = x² + 3x + 2?",
      options: ["2x + 3", "x² + 3", "2x + 2", "x + 3"],
      correctAnswer: 0,
      explanation: "The derivative of f(x) = x² + 3x + 2 is f'(x) = 2x + 3.",
      difficulty: "Medium",
      topic: "Calculus",
    },
    {
      id: "2",
      question:
        "Which of the following is a fundamental principle of object-oriented programming?",
      options: ["Encapsulation", "Compilation", "Debugging", "Testing"],
      correctAnswer: 0,
      explanation: "Encapsulation is one of the four pillars of OOP.",
      difficulty: "Easy",
      topic: "Programming",
    },
    {
      id: "3",
      question: "What is the chemical formula for water?",
      options: ["H₂O", "CO₂", "O₂", "H₂SO₄"],
      correctAnswer: 0,
      explanation: "Water = H₂O (2 Hydrogen + 1 Oxygen).",
      difficulty: "Easy",
      topic: "Chemistry",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (answeredQuestions.size / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => new Set(prev).add(currentQuestionIndex));
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAnswerClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "border-primary bg-primary/5 border-2"
        : "answer-default";
    }
    if (index === currentQuestion.correctAnswer) return "answer-correct";
    if (index === selectedAnswer) return "answer-incorrect";
    return "border border-gray-200 bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container-educational py-8">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Question Bank</span>
          </Button>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium">Mathematics Mastery</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{correctAnswers.size} correct</span>
            <span>
              {answeredQuestions.size - correctAnswers.size} incorrect
            </span>
            <span>{questions.length - answeredQuestions.size} remaining</span>
          </div>
        </Card>

        <Card className="p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Badge
                  className={getDifficultyColor(currentQuestion.difficulty)}
                >
                  {currentQuestion.difficulty}
                </Badge>
                <Badge variant="outline">{currentQuestion.topic}</Badge>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${getAnswerClass(
                  index
                )}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-medium">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                  {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-6 h-6 text-green-600 ml-auto" />
                  )}
                  {showResult &&
                    index === selectedAnswer &&
                    selectedAnswer !== currentQuestion.correctAnswer && (
                      <XCircle className="w-6 h-6 text-red-600 ml-auto" />
                    )}
                </div>
              </div>
            ))}
          </div>

          {showResult && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 animate-fade-in-up">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Explanation
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <div className="flex space-x-3">
              {!showResult ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="btn-primary px-8"
                >
                  Submit Answer
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowResult(false);
                      setSelectedAnswer(null);
                    }}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  {currentQuestionIndex < questions.length - 1 && (
                    <Button
                      onClick={handleNextQuestion}
                      className="btn-primary"
                    >
                      Next Question
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-medium mb-4">Question Navigation</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setSelectedAnswer(null);
                  setShowResult(false);
                }}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  index === currentQuestionIndex
                    ? "bg-primary text-white"
                    : answeredQuestions.has(index)
                    ? correctAnswers.has(index)
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
