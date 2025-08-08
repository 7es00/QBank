export interface QuestionBank {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  totalQuestions: number;
  enrolledUsers: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface QuestionBankFilters {
  search?: string;
  category?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  priceRange?: {
    min: number;
    max: number;
  };
  sortBy?: "price" | "rating" | "totalQuestions" | "enrolledUsers" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface QuestionBankStats {
  totalBanks: number;
  totalQuestions: number;
  totalEnrolledUsers: number;
  averageRating: number;
  categories: Array<{
    name: string;
    count: number;
  }>;
}
