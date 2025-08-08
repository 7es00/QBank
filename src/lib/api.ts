import type { QuestionBank, QuestionBankFilters } from "@/types/questionBank";
import type { Question, QuestionFilter } from "@/types/question";

const mockQuestionBanks: QuestionBank[] = [
  {
    id: "1",
    title: "Advanced Mathematics Mastery",
    description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts for competitive exams.",
    image: "/math-icon.jpg",
    price: 29.99,
    rating: 4.8,
    totalQuestions: 850,
    enrolledUsers: 12450,
    category: "Mathematics",
    level: "Advanced",
    duration: "3 months",
  },
  {
    id: "2",
    title: "Programming Fundamentals",
    description: "Master the basics of programming with questions covering Python, JavaScript, and data structures for beginners.",
    image: "/programming-icon.jpg",
    price: 19.99,
    rating: 4.6,
    totalQuestions: 650,
    enrolledUsers: 8900,
    category: "Programming",
    level: "Beginner",
    duration: "2 months",
  },
  {
    id: "3",
    title: "Computer Science Essentials",
    description: "Advanced programming concepts, algorithms, and system design questions for intermediate to advanced developers.",
    image: "/programming-icon.jpg",
    price: 39.99,
    rating: 4.9,
    totalQuestions: 1200,
    enrolledUsers: 15600,
    category: "Programming",
    level: "Advanced",
    duration: "4 months",
  },
  {
    id: "4",
    title: "Physics for Engineers",
    description: "Comprehensive physics question bank covering mechanics, thermodynamics, and electrical engineering concepts.",
    image: "/science-icon.jpg",
    price: 24.99,
    rating: 4.7,
    totalQuestions: 750,
    enrolledUsers: 10200,
    category: "Science",
    level: "Intermediate",
    duration: "3 months",
  },
  {
    id: "5",
    title: "Chemistry Fundamentals",
    description: "Essential chemistry concepts, reactions, and laboratory techniques for students and professionals.",
    image: "/science-icon.jpg",
    price: 22.99,
    rating: 4.5,
    totalQuestions: 600,
    enrolledUsers: 7800,
    category: "Science",
    level: "Beginner",
    duration: "2 months",
  },
  {
    id: "6",
    title: "Data Science & Analytics",
    description: "Comprehensive coverage of statistics, machine learning, and data analysis techniques for modern professionals.",
    image: "/programming-icon.jpg",
    price: 34.99,
    rating: 4.8,
    totalQuestions: 950,
    enrolledUsers: 13400,
    category: "Programming",
    level: "Advanced",
    duration: "4 months",
  },
];

const mockQuestions: Question[] = [
  {
    id: "1",
    questionBankId: "1",
    title: "Derivative Calculation",
    content: "What is the derivative of f(x) = x² + 3x + 2?",
    type: "multiple-choice",
    difficulty: "medium",
    points: 10,
    options: [
      { id: "1", text: "2x + 3", isCorrect: true },
      { id: "2", text: "x² + 3", isCorrect: false },
      { id: "3", text: "2x + 2", isCorrect: false },
      { id: "4", text: "x + 3", isCorrect: false },
    ],
    correctAnswer: "2x + 3",
    explanation: "The derivative of f(x) = x² + 3x + 2 is f'(x) = 2x + 3. We use the power rule for x² (2x) and the constant rule for 3x (3).",
    tags: ["calculus", "derivatives", "polynomials"],
  },
  {
    id: "2",
    questionBankId: "1",
    title: "Integration Problem",
    content: "What is the integral of 2x + 3?",
    type: "multiple-choice",
    difficulty: "medium",
    points: 10,
    options: [
      { id: "1", text: "x² + 3x + C", isCorrect: true },
      { id: "2", text: "x² + 3", isCorrect: false },
      { id: "3", text: "2x² + 3x", isCorrect: false },
      { id: "4", text: "x² + 3x + 1", isCorrect: false },
    ],
    correctAnswer: "x² + 3x + C",
    explanation: "The integral of 2x + 3 is x² + 3x + C. We integrate term by term: ∫2x dx = x² and ∫3 dx = 3x, plus the constant of integration C.",
    tags: ["calculus", "integration", "polynomials"],
  },
];

export async function getQuestionBanks(filters?: QuestionBankFilters): Promise<QuestionBank[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredBanks = [...mockQuestionBanks];

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filteredBanks = filteredBanks.filter(bank => 
      bank.title.toLowerCase().includes(search) ||
      bank.description.toLowerCase().includes(search) ||
      bank.category.toLowerCase().includes(search)
    );
  }

  if (filters?.category) {
    filteredBanks = filteredBanks.filter(bank => bank.category === filters.category);
  }

  if (filters?.level) {
    filteredBanks = filteredBanks.filter(bank => bank.level === filters.level);
  }

  if (filters?.priceRange) {
    const { min, max } = filters.priceRange;
  
    filteredBanks = filteredBanks.filter(bank =>
      bank.price >= min && bank.price <= max
    );
  }
  

  if (filters?.sortBy) {
    filteredBanks.sort((a, b) => {
      const aValue = a[filters.sortBy!];
      const bValue = b[filters.sortBy!];
      const order = filters.sortOrder === "desc" ? -1 : 1;

      if (aValue === undefined || bValue === undefined) return 0;

      return aValue < bValue ? -1 * order : aValue > bValue ? 1 * order : 0;
    });
  }

  return filteredBanks;
}

export async function getQuestionBankById(id: string): Promise<QuestionBank | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockQuestionBanks.find(bank => bank.id === id) || null;
}

export async function getQuestions(filters?: QuestionFilter): Promise<Question[]> {
  await new Promise(resolve => setTimeout(resolve, 300));

  let filteredQuestions = [...mockQuestions];

  if (filters?.questionBankId) {
    filteredQuestions = filteredQuestions.filter(q => q.questionBankId === filters.questionBankId);
  }

  if (filters?.difficulty) {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === filters.difficulty);
  }

  if (filters?.type) {
    filteredQuestions = filteredQuestions.filter(q => q.type === filters.type);
  }

  if (filters?.search) {
    const search = filters.search.toLowerCase();
    filteredQuestions = filteredQuestions.filter(q => 
      q.title.toLowerCase().includes(search) ||
      q.content.toLowerCase().includes(search)
    );
  }

  return filteredQuestions;
}

export async function getQuestionById(id: string): Promise<Question | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockQuestions.find(q => q.id === id) || null;
}

export async function login(email: string, password: string): Promise<{ success: boolean; user?: any; error?: string }> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === "test@example.com" && password === "password") {
    return {
      success: true,
      user: {
        id: "1",
        email: "test@example.com",
        name: "Test User",
      }
    };
  }

  return {
    success: false,
    error: "Invalid email or password"
  };
}

export async function register(userData: { name: string; email: string; password: string }): Promise<{ success: boolean; user?: any; error?: string }> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    user: {
      id: "1",
      email: userData.email,
      name: userData.name,
    }
  };
}

export async function purchaseQuestionBank(bankId: string, userId: string): Promise<{ success: boolean; error?: string }> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
}
