import React from 'react';
import QuestionDisplay from './QuestionDisplay.js';
import Navigator from './Navigator.js';
import ControlBar from './ControlBar.js';
import { ArrowLeftIcon } from './icons.js';

const ExamScreen = (props) => {
  const {
    examTitle,
    questions,
    userAnswers,
    currentQuestionIndex,
    flaggedQuestions,
    checkedQuestions,
    onAnswerSelect,
    onNextQuestion,
    onPrevQuestion,
    onJumpToQuestion,
    onFlagQuestion,
    onCheckAnswer,
    onReturnToMenu,
  } = props;

  const currentQuestion = questions[currentQuestionIndex];
  const isChecked = checkedQuestions.has(currentQuestionIndex);

  return (
    <div className="p-2 sm:p-4 flex flex-col flex-grow">
      <header className="max-w-7xl mx-auto w-full bg-slate-800 rounded-t-lg shadow-lg p-4 flex justify-between items-center">
        <button
          onClick={onReturnToMenu}
          className="flex items-center space-x-2 px-3 py-1 rounded-md font-semibold transition-colors border-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500"
          aria-label="Return to chapter selection"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Menu</span>
        </button>
        <h1 className="text-lg sm:text-xl font-bold text-white text-right truncate pl-4">
          {examTitle}
        </h1>
      </header>
      <main className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 flex-grow">
          <div className="lg:col-span-8">
            <QuestionDisplay
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              selectedAnswers={userAnswers[currentQuestionIndex]}
              onAnswerSelect={(optionIndex) => onAnswerSelect(optionIndex)}
              isChecked={isChecked}
            />
          </div>
          <div className="lg:col-span-4">
            <Navigator
              questions={questions}
              userAnswers={userAnswers}
              currentQuestionIndex={currentQuestionIndex}
              flaggedQuestions={flaggedQuestions}
              checkedQuestions={checkedQuestions}
              onJumpToQuestion={onJumpToQuestion}
            />
          </div>
        </div>
      </main>
      <footer className="max-w-7xl mx-auto w-full mt-4">
         <ControlBar
          onPrev={onPrevQuestion}
          onNext={onNextQuestion}
          onFlag={onFlagQuestion}
          onCheckAnswer={onCheckAnswer}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
          isFlagged={flaggedQuestions.has(currentQuestionIndex)}
          isChecked={isChecked}
          hasSelection={userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex].length > 0}
        />
      </footer>
    </div>
  );
};

export default ExamScreen;
