"use client";

import { useState } from "react";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

type QuizCardProps = {
  title: string;
  questions: QuizQuestion[];
};

export default function QuizCard({ title, questions }: QuizCardProps) {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIdx: number, option: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionIdx]: option,
    });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  return (
    <div className="border p-4 rounded mb-4 bg-gray-100 shadow">
      <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="font-medium text-black">{q.question}</p>
          <div className="flex flex-col space-y-1 mt-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                className={`border rounded px-2 py-1 text-black ${
                  userAnswers[idx] === opt ? "bg-blue-400" : "bg-gray-200"
                }`}
                onClick={() => handleOptionClick(idx, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {showResults && (
            <p
              className={`mt-1 text-sm text-black ${
                userAnswers[idx] === q.answer
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {userAnswers[idx] === q.answer ? "✅ Correct!" : `❌ Correct answer: ${q.answer}`}
            </p>
          )}
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Check Answers
      </button>
    </div>
  );
}