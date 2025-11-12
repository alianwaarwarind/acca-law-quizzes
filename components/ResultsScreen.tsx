import React from 'react';
import { Question, UserAnswers } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface ResultsScreenProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onRestart: () => void;
}

// Helper to check if two arrays of numbers are equal, regardless of order.
const areArraysEqual = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((value, index) => value === sorted2[index]);
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ questions, userAnswers, onRestart }) => {
  const score = userAnswers.reduce((acc, answer, index) => {
    const correctAnswers = questions[index].correctAnswerIndices;
    const userSelectedAnswers = answer || [];
    return areArraysEqual(userSelectedAnswers, correctAnswers) ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-4">Exam Results</h1>
        
        <div className="text-center mb-8 bg-slate-50 border border-slate-200 rounded-lg p-8">
          <p className="text-lg text-slate-600">You scored</p>
          <p className="text-6xl font-bold text-blue-600 my-2">{percentage}%</p>
          <p className="text-2xl font-semibold text-slate-700">{score} out of {questions.length} correct</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 border-b-2 border-slate-200 pb-2 mb-6">Question Review</h2>
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswerIndices = userAnswers[index] || [];
              const isCorrect = areArraysEqual(userAnswerIndices, q.correctAnswerIndices);
              const optionLetter = (i: number) => String.fromCharCode(65 + i);
              const borderColor = isCorrect ? 'border-green-200' : 'border-red-200';

              return (
                <div key={index} className={`border rounded-lg p-4 ${isCorrect ? 'bg-green-50/50' : 'bg-red-50/50'} ${borderColor}`}>
                  <div className="flex items-start justify-between">
                    <p className="font-semibold text-slate-800 mb-2 flex-1">
                      <span className="font-bold text-slate-500 mr-2">Q{index + 1}.</span> 
                      {q.questionText}
                    </p>
                    {isCorrect ? <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0 ml-4" /> : <XCircleIcon className="h-8 w-8 text-red-500 flex-shrink-0 ml-4" />}
                  </div>
                  <div className="space-y-2 mt-2 pl-7">
                    {q.options.map((option, optIndex) => {
                      const isCorrectAnswer = q.correctAnswerIndices.includes(optIndex);
                      const isUserSelection = userAnswerIndices.includes(optIndex);

                      let optionClass = "text-slate-700";
                      if (isCorrectAnswer) {
                        optionClass = "text-green-700 font-bold";
                      } else if (isUserSelection && !isCorrectAnswer) {
                        optionClass = "text-red-700 line-through";
                      }
                      
                      return <p key={optIndex} className={optionClass}>{optionLetter(optIndex)}. {option}</p>;
                    })}
                  </div>
                  {q.explanation && (
                    <div className={`mt-4 pt-3 border-t ${borderColor} pl-7`}>
                      <h4 className="font-semibold text-slate-700 mb-1">Explanation</h4>
                      <p className="text-sm text-slate-600">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center pt-6 border-t border-slate-200">
          <button
            onClick={onRestart}
            className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg shadow-md"
          >
            Try Another Chapter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;