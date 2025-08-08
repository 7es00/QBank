# Question Banks - Educational Platform

A modern, responsive web application for students and professionals to access premium question banks across multiple subjects. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Comprehensive Question Banks**: Access hundreds of expertly crafted question banks
- **Multiple Subjects**: Mathematics, Programming, Science, and more
- **Interactive Learning**: Practice with instant feedback and explanations
- **Progress Tracking**: Monitor your performance with detailed analytics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Beautiful, intuitive interface with smooth animations
- **Search & Filter**: Find exactly what you need with advanced search capabilities

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Next.js built-in

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages
│   ├── my-banks/          # User's purchased question banks
│   ├── question-bank/     # Question bank detail pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── question-bank/    # Question bank related components
│   ├── shared/           # Shared components (Header, Footer, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and API
├── types/                # TypeScript type definitions
└── assets/               # Static assets (images)
```

## 🎯 Key Components

### Question Banks Section
- Displays available question banks with search functionality
- Filter by category, level, and price
- Responsive grid layout with hover effects

### Question Interface
- Interactive question answering system
- Progress tracking and analytics
- Instant feedback with explanations
- Navigation between questions

### Authentication System
- Login and registration forms
- Form validation and error handling
- Responsive design with animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd questionbanks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Routes

- `/` - Home page with question banks overview
- `/auth` - Authentication page (login/register)
- `/my-banks` - User's purchased question banks
- `/question-bank/[id]` - Individual question bank details

## 🎨 Design System

### Colors
- **Primary**: `#AF0936` (Deep Pink)
- **Secondary**: `#d1426b` (Light Pink)
- **Accent**: `#F3729F` (Pink)
- **Background**: White and gray gradients

### Typography
- **Primary Font**: Inter (UI elements)
- **Secondary Font**: Poppins (Headings)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible input fields
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration for:
- Custom color palette
- Font families
- Animation utilities
- Responsive breakpoints

### TypeScript
Strict TypeScript configuration with:
- Proper type definitions for all components
- Interface definitions for data structures
- API type safety

## 📊 Mock Data

The application includes comprehensive mock data for:
- Question banks across multiple subjects
- Sample questions with explanations
- User authentication states
- Progress tracking data

## 🧪 Testing

Run the linter to check for code quality:
```bash
npm run lint
```

## 🚀 Deployment

The application is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
