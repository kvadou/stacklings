"use client";

import QuizCard from "./QuizCard";

type Quiz = {
  _id: string;
  title: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export default function QuizSection({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <div className="space-y-4 mt-12">
      <h1 className="text-4xl font-bold text-center mb-8">Quizzes</h1>
      {quizzes.map((quiz) => (
        <QuizCard
          key={quiz._id}
          title={quiz.title}
          questions={quiz.questions}
        />
      ))}
    </div>
  );
}