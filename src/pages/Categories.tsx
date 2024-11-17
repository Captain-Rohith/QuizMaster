import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/quizData';
import { Brain, Trophy, Book } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Trophy: Trophy,
  Book: Book
} as const;

export const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Choose a Category
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Link
                key={category.id}
                to={`/quiz/${category.id}`}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-center">
                  <div className="inline-block p-3 rounded-full bg-indigo-100 mb-4">
                    <IconComponent className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md group-hover:bg-indigo-700 transition-colors">
                    Start Quiz
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};