import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import QuestionBankCard from "./QuestionBankCard";
import mathIcon from "@/assets/math-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import programmingIcon from "@/assets/programming-icon.jpg";

const QuestionBanksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Mathematics", "Science", "Programming", "Languages", "Business"];

  const questionBanks = [
    {
      id: "1",
      title: "Advanced Mathematics Mastery",
      description: "Comprehensive question bank covering calculus, algebra, geometry, and advanced mathematical concepts for competitive exams.",
      image: mathIcon,
      price: 29.99,
      rating: 4.8,
      totalQuestions: 850,
      enrolledUsers: 12450,
      category: "Mathematics",
      level: "Advanced" as const,
      duration: "3 months"
    },
    {
      id: "2",
      title: "Physics & Chemistry Fundamentals",
      description: "Complete science question bank with detailed explanations covering all major physics and chemistry topics.",
      image: scienceIcon,
      price: 24.99,
      rating: 4.7,
      totalQuestions: 720,
      enrolledUsers: 8930,
      category: "Science",
      level: "Intermediate" as const,
      duration: "2 months"
    },
    {
      id: "3",
      title: "Programming Interview Prep",
      description: "Master coding interviews with algorithmic problems, data structures, and system design questions.",
      image: programmingIcon,
      price: 39.99,
      rating: 4.9,
      totalQuestions: 1200,
      enrolledUsers: 15670,
      category: "Programming",
      level: "Advanced" as const,
      duration: "6 months"
    },
    {
      id: "4",
      title: "Basic Mathematics Foundation",
      description: "Essential mathematics concepts for beginners covering arithmetic, basic algebra, and introductory geometry.",
      image: mathIcon,
      price: 19.99,
      rating: 4.6,
      totalQuestions: 450,
      enrolledUsers: 6780,
      category: "Mathematics",
      level: "Beginner" as const,
      duration: "1 month"
    },
    {
      id: "5",
      title: "Biology & Life Sciences",
      description: "Comprehensive biology question bank covering cell biology, genetics, ecology, and human anatomy.",
      image: scienceIcon,
      price: 27.99,
      rating: 4.7,
      totalQuestions: 680,
      enrolledUsers: 9340,
      category: "Science",
      level: "Intermediate" as const,
      duration: "2.5 months"
    },
    {
      id: "6",
      title: "Web Development Complete",
      description: "Full-stack web development questions covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      image: programmingIcon,
      price: 34.99,
      rating: 4.8,
      totalQuestions: 950,
      enrolledUsers: 11250,
      category: "Programming",
      level: "Intermediate" as const,
      duration: "4 months"
    }
  ];

  const filteredBanks = questionBanks.filter(bank => {
    const matchesCategory = selectedCategory === "All" || bank.category === selectedCategory;
    const matchesSearch = bank.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bank.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-educational">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-heading-2 mb-4">
            Explore Our 
            <span className="text-transparent bg-gradient-to-r from-[#AF0936] to-[#d1426b] bg-clip-text">
              {" "}Question Banks
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from hundreds of expertly crafted question banks designed to help you master any subject
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search question banks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 rounded-xl border-gray-200 focus:border-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "btn-primary" 
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Advanced Filters */}
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredBanks.length} question bank{filteredBanks.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Sort by: Most Popular</span>
          </div>
        </div>

        {/* Question Banks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {filteredBanks.map((bank) => (
            <QuestionBankCard key={bank.id} {...bank} />
          ))}
        </div>

        {/* Load More */}
        {filteredBanks.length > 0 && (
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="lg" className="px-8">
              Load More Question Banks
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredBanks.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No question banks found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionBanksSection;