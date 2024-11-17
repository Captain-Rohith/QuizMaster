export interface User {
  username: string;
  password: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
}