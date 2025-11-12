export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndices: number[];
  explanation?: string;
}

// Represents a selectable exam unit with a title and questions.
export interface ExamUnit {
    title: string;
    questions: Question[];
}

// A Chapter can now be a container for sub-chapters or a direct exam unit.
export interface Chapter {
  id: number;
  title: string;
  questions?: Question[];
  subChapters?: ExamUnit[];
}

export enum ExamState {
  ChapterSelection,
  InProgress,
  Finished,
}

export type UserAnswers = (number[] | null)[];