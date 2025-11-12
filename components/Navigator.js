import React from 'react';

// Helper to check if two arrays of numbers are equal, regardless of order.
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((value, index) => value === sorted2[index]);
};


const Navigator = ({
  questions,
  userAnswers,
  currentQuestionIndex,
  flaggedQuestions,
  checkedQuestions,
  onJumpToQuestion,
}) => {
  const totalQuestions = questions.length;
  const answeredCount = userAnswers.filter(a => a !== null && a.length > 0).length;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200 h-full">
      <div className="bg-slate-100 p-3 rounded-md mb-4 text-center">
        <h3 className="font-bold text-slate-700 text-lg">Question Navigator</h3>
        <p className="font-semibold text-slate-500">{answeredCount} / {totalQuestions} Answered</p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isCurrent = i === currentQuestionIndex;
          const isFlagged = flaggedQuestions.has(i);
          const isChecked = checkedQuestions.has(i);

          let buttonClass = 'border-2 border-slate-300 text-slate-600 hover:bg-slate-100';

          if (isFlagged) {
            buttonClass = 'bg-yellow-100 border-2 border-yellow-300 text-yellow-800 font-bold hover:bg-yellow-200';
          } else if (isChecked) {
            const userAnswer = userAnswers[i] || [];
            const correctAnswer = questions[i].correctAnswerIndices;
            const isCorrect = areArraysEqual(userAnswer, correctAnswer);
            if (isCorrect) {
              buttonClass = 'bg-green-500 border-2 border-green-600 text-white font-bold hover:bg-green-600';
            } else {
              buttonClass = 'bg-red-500 border-2 border-red-600 text-white font-bold hover:bg-red-600';
            }
          } else {
            const answer = userAnswers[i];
            const isAnswered = answer !== null && answer.length > 0;
            if (isAnswered) {
              buttonClass = 'bg-blue-100 border-2 border-blue-300 text-blue-800 font-bold hover:bg-blue-200';
            }
          }
          
          if (isCurrent) {
            buttonClass += ' ring-2 ring-blue-500 ring-offset-1';
          }

          return (
            <button
              key={i}
              onClick={() => onJumpToQuestion(i)}
              className={`h-10 w-10 rounded-md flex items-center justify-center font-semibold text-sm transition-all duration-200 ${buttonClass}`}
              aria-label={`Go to question ${i + 1}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
       <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-sm text-slate-600">
        <div className="flex items-center"><div className="w-4 h-4 rounded-md bg-green-500 border-2 border-green-600 mr-2"></div> Correct</div>
        <div className="flex items-center"><div className="w-4 h-4 rounded-md bg-red-500 border-2 border-red-600 mr-2"></div> Incorrect</div>
        <div className="flex items-center"><div className="w-4 h-4 rounded-md bg-blue-100 border-2 border-blue-300 mr-2"></div> Answered</div>
        <div className="flex items-center"><div className="w-4 h-4 rounded-md bg-yellow-100 border-2 border-yellow-300 mr-2"></div> Flagged</div>
        <div className="flex items-center"><div className="w-4 h-4 rounded-md border-2 border-slate-300 mr-2"></div> Unanswered</div>
      </div>
    </div>
  );
};

export default Navigator;
