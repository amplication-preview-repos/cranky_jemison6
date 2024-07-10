import { Quiz as TQuiz } from "../api/quiz/Quiz";

export const QUIZ_TITLE_FIELD = "correctAnswer";

export const QuizTitle = (record: TQuiz): string => {
  return record.correctAnswer?.toString() || String(record.id);
};
