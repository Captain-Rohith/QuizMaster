import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/quizData';
import { Question } from '../types';

export const Quiz: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === categoryId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!category) {
      navigate('/categories');
      return;
    }
  }, [category, navigate]);

  useEffect(() => {
    if (isFinished || selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedAnswer, isFinished]);

  if (!category) return null;

  const question: Question = category.questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === category.questions.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    }
  };

  if (isFinished) {
    const percentage = (score / category.questions.length) * 100;
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Your score: {score} out of {category.questions.length} ({percentage.toFixed(1)}%)
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {percentage >= 70
                ? 'Great job! You\'re a master of this topic!'
                : percentage >= 40
                ? 'Good effort! Keep practicing to improve.'
                : 'Keep learning! You\'ll do better next time.'}
            </p>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/categories')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Try Another Category
              </button>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setSelectedAnswer(null);
                  setIsFinished(false);
                  setTimeLeft(30);
                }}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {category.name}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                Question {currentQuestion + 1}/{category.questions.length}
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">
                {timeLeft}s
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-gray-800 mb-6">
              {question.question}
            </h3>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    selectedAnswer === null
                      ? 'bg-gray-100 hover:bg-gray-200'
                      : selectedAnswer === index
                      ? index === question.correctAnswer
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                      : index === question.correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className={`px-6 py-3 rounded-lg text-white transition-colors ${
                selectedAnswer !== null
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === category.questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};