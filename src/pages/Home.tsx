import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Trophy, Users } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to QuizMaster
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Challenge yourself with our diverse collection of quizzes across various categories.
            Test your knowledge and compete with others!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Multiple Categories
            </h3>
            <p className="text-gray-600">
              Choose from various topics including Science, Sports, and History
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <Trophy className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Track Progress
            </h3>
            <p className="text-gray-600">
              Monitor your scores and see how you improve over time
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Community
            </h3>
            <p className="text-gray-600">
              Join our community of quiz enthusiasts and share your achievements
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Quiz Now
          </Link>
        </div>
      </div>
    </div>
  );
};