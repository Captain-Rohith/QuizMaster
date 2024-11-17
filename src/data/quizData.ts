import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'science',
    name: 'Science',
    description: 'Test your knowledge of scientific facts and discoveries',
    icon: 'Brain',
    questions: [
      {
        id: 1,
        question: 'What planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the chemical symbol for Iron?',
        options: ['Ag', 'Au', 'Fe', 'Cu'],
        correctAnswer: 3
      },
      {
        id: 3,
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which planet has the most moons?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'What is the largest organ in the human body?',
        options: ['Brain', 'Liver', 'Skin', 'Heart'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Challenge yourself with sports trivia',
    icon: 'Trophy',
    questions: [
      {
        id: 1,
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'In which sport would you perform a slam dunk?',
        options: ['Football', 'Basketball', 'Tennis', 'Golf'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'How many players are there in a standard soccer team?',
        options: ['9', '10', '11', '12'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which country invented table tennis?',
        options: ['China', 'Japan', 'England', 'USA'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'In which sport is the Davis Cup awarded?',
        options: ['Tennis', 'Cricket', 'Hockey', 'Golf'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through time with historical facts',
    icon: 'Book',
    questions: [
      {
        id: 1,
        question: 'Who was the first President of the United States?',
        options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'In which year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Which ancient wonder was located in Egypt?',
        options: ['Hanging Gardens', 'Colossus of Rhodes', 'Great Pyramid of Giza', 'Temple of Artemis'],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Who was the first woman to win a Nobel Prize?',
        options: ['Mother Teresa', 'Marie Curie', 'Jane Addams', 'Pearl Buck'],
        correctAnswer: 1
      }
    ]
  }
];
