export interface Question {
  id: string;
  questionBankId: string;
  title: string;
  content: string;
  type: "multiple-choice" | "true-false" | "fill-in-blank" | "essay" | "matching";
  difficulty: "easy" | "medium" | "hard";
  points: number;
  options?: QuestionOption[];
  correctAnswer?: string | string[];
  explanation?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuestionAttempt {
  id: string;
  questionId: string;
  userId: string;
  selectedAnswer?: string | string[];
  isCorrect: boolean;
  timeSpent: number; 
  createdAt: Date;
}

export interface QuestionBankProgress {
  questionBankId: string;
  userId: string;
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  currentScore: number;
  timeSpent: number; 
  lastAttemptedAt?: Date;
  completedAt?: Date;
}

export interface QuestionFilter {
  questionBankId?: string;
  difficulty?: "easy" | "medium" | "hard";
  type?: "multiple-choice" | "true-false" | "fill-in-blank" | "essay" | "matching";
  tags?: string[];
  search?: string;
}
