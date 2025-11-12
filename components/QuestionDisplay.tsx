import React from 'react';
import { Question } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
  selectedAnswers: number[] | null;
  onAnswerSelect: (optionIndex: number) => void;
  isChecked: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionNumber,
  selectedAnswers,
  onAnswerSelect,
  isChecked,
}) => {
  const isMultiAnswer = question.correctAnswerIndices.length > 1;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-slate-200 h-full flex flex-col">
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-1">
          Question {questionNumber}
        </h2>
        {isMultiAnswer && <p className="text-sm text-blue-600 font-semibold mb-2 bg-blue-50 p-2 rounded-md inline-block">(Select all that apply)</p>}
      </div>
      <p className="text-base text-slate-700 my-6 flex-grow">{question.questionText}</p>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswers?.includes(index) ?? false;
          const optionLetter = String.fromCharCode(65 + index);
          
          let stateClasses = '';
          let stateIcon = null;

          if (isChecked) {
            const isCorrect = question.correctAnswerIndices.includes(index);
            if (isCorrect) {
              stateClasses = 'bg-green-50 border-green-400';
              stateIcon = <CheckCircleIcon className="h-6 w-6 text-green-500" />;
            } else if (isSelected && !isCorrect) {
              stateClasses = 'bg-red-50 border-red-400';
              stateIcon = <XCircleIcon className="h-6 w-6 text-red-500" />;
            } else {
              stateClasses = 'bg-slate-50 border-slate-200 opacity-70';
            }
          } else {
            if (isSelected) {
              stateClasses = 'bg-blue-50 border-blue-500 ring-2 ring-blue-200';
            } else {
              stateClasses = 'bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400';
            }
          }

          return (
            <div
              key={index}
              onClick={() => !isChecked && onAnswerSelect(index)}
              className={`flex items-center p-4 border-2 rounded-lg transition-all duration-200 ${stateClasses} ${!isChecked ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className={`mr-4 font-bold text-white flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${isSelected && !isChecked ? 'bg-blue-600' : 'bg-slate-400'}`}>
                {optionLetter}
              </div>
              <span className="text-slate-800 flex-grow">{option}</span>
              {stateIcon && <div className="ml-4">{stateIcon}</div>}
            </div>
          );
        })}
      </div>
      {isChecked && question.explanation && (
        <div className="mt-6 pt-4 border-t-2 border-slate-200 bg-slate-50 rounded-b-lg -m-8 p-6 mt-8">
            <h4 className="font-semibold text-slate-800 mb-1 text-base">Explanation</h4>
            <p className="text-slate-600">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
