import React, { useState, useCallback } from 'react';
import { Question, ExamState, UserAnswers, ExamUnit } from './types';
import ChapterSelectionScreen from './components/StartScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';
import ConfirmationModal from './components/ConfirmationModal';

const App: React.FC = () => {
  const [examState, setExamState] = useState<ExamState>(ExamState.ChapterSelection);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [checkedQuestions, setCheckedQuestions] = useState<Set<number>>(new Set());
  const [examTitle, setExamTitle] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const resetExam = () => {
    setExamState(ExamState.ChapterSelection);
    setQuestions([]);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setFlaggedQuestions(new Set());
    setCheckedQuestions(new Set());
    setExamTitle('');
  }

  const handleStartExam = useCallback((exam: ExamUnit) => {
    const newQuestions = exam.questions;
    setQuestions(newQuestions);
    setExamTitle(exam.title);
    setUserAnswers(Array(newQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setFlaggedQuestions(new Set());
    setCheckedQuestions(new Set());
    setExamState(ExamState.InProgress);
  }, []);

  const handleAnswerSelect = (optionIndex: number) => {
    if (checkedQuestions.has(currentQuestionIndex)) return; // Don't allow changes after checking

    const isMultiAnswer = questions[currentQuestionIndex].correctAnswerIndices.length > 1;
    const currentSelection = userAnswers[currentQuestionIndex] || [];
    
    let newSelection: number[];

    if (isMultiAnswer) {
      if (currentSelection.includes(optionIndex)) {
        newSelection = currentSelection.filter(i => i !== optionIndex);
      } else {
        newSelection = [...currentSelection, optionIndex];
      }
    } else {
      newSelection = [optionIndex];
    }
    
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = newSelection.length > 0 ? newSelection : null;
      return newAnswers;
    });
  };
  
  const handleCheckAnswer = () => {
    if (checkedQuestions.has(currentQuestionIndex)) return;

    setCheckedQuestions(prev => new Set(prev).add(currentQuestionIndex));

    if (currentQuestionIndex === questions.length - 1) {
      // Use a timeout to allow the user to see the feedback on the last question before transitioning
      setTimeout(() => {
        setExamState(ExamState.Finished);
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
        setCurrentQuestionIndex(index);
    }
  }

  const handleFlagQuestion = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestionIndex)) {
        newSet.delete(currentQuestionIndex);
      } else {
        newSet.add(currentQuestionIndex);
      }
      return newSet;
    });
  };

  const handleReturnToMenu = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmReturn = () => {
    setShowConfirmModal(false);
    resetExam();
  };

  const handleCancelReturn = () => {
    setShowConfirmModal(false);
  };

  const renderContent = () => {
    switch (examState) {
      case ExamState.ChapterSelection:
        return <ChapterSelectionScreen onStartExam={handleStartExam} />;
      case ExamState.InProgress:
        return (
          <ExamScreen
            examTitle={examTitle}
            questions={questions}
            userAnswers={userAnswers}
            currentQuestionIndex={currentQuestionIndex}
            flaggedQuestions={flaggedQuestions}
            checkedQuestions={checkedQuestions}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onJumpToQuestion={handleJumpToQuestion}
            onFlagQuestion={handleFlagQuestion}
            onCheckAnswer={handleCheckAnswer}
            onReturnToMenu={handleReturnToMenu}
          />
        );
      case ExamState.Finished:
        return <ResultsScreen questions={questions} userAnswers={userAnswers} onRestart={resetExam} />;
      default:
        return <ChapterSelectionScreen onStartExam={handleStartExam} />;
    }
  };

  return (
    <>
      <style>{`
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="font-inter flex flex-col min-h-screen bg-slate-100">
        <main className="flex-grow flex flex-col">
            {renderContent()}
        </main>
        <footer className="text-center p-4 text-slate-600 text-sm">
            Made with love <span role="img" aria-label="heart">❤️</span> by <a href="https://alianwaarwarind.github.io/portfolio/cv/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Ali Anwaar</a>
        </footer>
        <ConfirmationModal
          isOpen={showConfirmModal}
          title="Return to Menu?"
          message="Are you sure you want to leave the exam? Your current progress will be lost."
          onConfirm={handleConfirmReturn}
          onCancel={handleCancelReturn}
          confirmText="Yes, Leave"
          cancelText="No, Stay"
        />
      </div>
    </>
  );
};

export default App;