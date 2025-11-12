import React, { useState } from 'react';
import { chapters } from '../data/questions';
import { BookOpenIcon, ChevronDownIcon } from './icons';
// FIX: The 'Chapter' type is defined in '../types' not '../data/questions'.
import { ExamUnit, Chapter } from '../types';

interface ChapterSelectionScreenProps {
  onStartExam: (exam: ExamUnit) => void;
}

const ChapterSelectionScreen: React.FC<ChapterSelectionScreenProps> = ({ onStartExam }) => {
  const [openChapterId, setOpenChapterId] = useState<number | null>(null);

  const handleToggleChapter = (chapterId: number) => {
    setOpenChapterId(prevId => (prevId === chapterId ? null : chapterId));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">ACCA English Law Practice Exam</h1>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Welcome! Select a chapter or sub-topic to begin your practice test.</p>
        
        <div className="space-y-3 text-left">
          {chapters.map((chapter) => {
            if (chapter.subChapters) {
              const isOpen = openChapterId === chapter.id;
              return (
                <div key={chapter.id}>
                  <button
                    onClick={() => handleToggleChapter(chapter.id)}
                    className="w-full p-4 rounded-lg text-left transition-all duration-200 flex items-center group bg-white border border-slate-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md cursor-pointer"
                  >
                    <div className="mr-4 p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white">
                        <BookOpenIcon className="h-6 w-6"/>
                    </div>
                    <div className="flex-grow">
                      <h2 className="font-semibold text-lg text-slate-700">{`Chapter ${chapter.id}: ${chapter.title}`}</h2>
                    </div>
                    <ChevronDownIcon className={`h-6 w-6 text-slate-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-8 pt-2 space-y-2">
                      {chapter.subChapters.map(subChapter => {
                        const isEnabled = subChapter.questions.length > 0;
                        return (
                          <button
                            key={subChapter.title}
                            onClick={() => isEnabled && onStartExam(subChapter)}
                            disabled={!isEnabled}
                            className={`w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center group ${
                              isEnabled 
                                ? 'bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50' 
                                : 'bg-slate-100 text-slate-500 cursor-not-allowed'
                            }`}
                          >
                            <div className="flex-grow">
                              <h3 className="font-medium text-slate-600">{subChapter.title}</h3>
                               {isEnabled && <p className="text-sm text-slate-500">{subChapter.questions.length} questions &bull; {subChapter.questions.length} minutes</p>}
                            </div>
                            {!isEnabled && <span className="text-xs font-semibold bg-slate-200 text-slate-500 px-3 py-1 rounded-full">Coming Soon</span>}
                            {isEnabled && <span className="text-blue-400 font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">&#8250;</span>}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Render a standard chapter button
            const isEnabled = chapter.questions && chapter.questions.length > 0;
            return (
              <button
                key={chapter.id}
                onClick={() => isEnabled && onStartExam({title: `Chapter ${chapter.id}: ${chapter.title}`, questions: chapter.questions!})}
                disabled={!isEnabled}
                className={`w-full p-4 rounded-lg text-left transition-all duration-200 flex items-center group ${
                  isEnabled 
                    ? 'bg-white border border-slate-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md cursor-pointer' 
                    : 'bg-slate-100 border border-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                <div className={`mr-4 p-3 rounded-lg ${isEnabled ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white' : 'bg-slate-200 text-slate-400'}`}>
                    <BookOpenIcon className="h-6 w-6"/>
                </div>
                <div className="flex-grow">
                  <h2 className={`font-semibold text-lg ${isEnabled ? 'text-slate-700' : ''}`}>{`Chapter ${chapter.id}: ${chapter.title}`}</h2>
                  {isEnabled && <p className="text-sm text-slate-500">{chapter.questions!.length} questions &bull; {chapter.questions!.length} minutes</p>}
                </div>
                {!isEnabled && <span className="text-xs font-semibold bg-slate-200 text-slate-500 px-3 py-1 rounded-full">Coming Soon</span>}
                {isEnabled && <span className="text-blue-400 font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity">&#8250;</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterSelectionScreen;