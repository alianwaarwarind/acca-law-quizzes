import React from 'react';
import { FlagIcon } from './icons.js';

const ControlBar = ({
  onPrev,
  onNext,
  onFlag,
  onCheckAnswer,
  isFirstQuestion,
  isLastQuestion,
  isFlagged,
  isChecked,
  hasSelection,
}) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <button
          onClick={onFlag}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md font-semibold transition-colors border-2 ${
              isFlagged 
              ? 'bg-yellow-400 text-white border-yellow-500 hover:bg-yellow-500' 
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
        >
          <FlagIcon className="h-5 w-5"/>
          <span>{isFlagged ? 'Unflag' : 'Flag'}</span>
        </button>
         <button
          onClick={onCheckAnswer}
          disabled={!hasSelection || isChecked}
          className="px-6 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors border-2 border-green-700 disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onPrev}
          disabled={isFirstQuestion}
          className="px-6 py-2 rounded-md font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={isLastQuestion || !isChecked}
          className="px-6 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
