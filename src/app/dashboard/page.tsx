import { getModules, getQuizzes } from "@/lib/sanity";
import QuizSection from "@/components/QuizSection";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-green-200 to-yellow-200 text-center">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4 animate-bounce">
          Please log in to view your dashboard.
        </h1>
      </main>
    );
  }

  const [modules, quizzes] = await Promise.all([
    getModules(),
    getQuizzes(),
  ]);

  return (
    <main className="p-4 max-w-4xl mx-auto bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-10">Your Learning Adventure</h1>

      <div className="space-y-6">
        {modules.map((module: any) => (
          <div
            key={module._id}
            className="bg-white border-4 border-yellow-400 rounded-3xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-purple-600 mb-2">{module.title}</h2>
            <p className="text-black text-base mb-4">{module.description}</p>
            {module.lessons?.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-blue-800">
                {module.lessons.map((lesson: any) => (
                  <li key={lesson._id} className="hover:text-pink-500 transition-colors">{lesson.title}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Fun and interactive quiz section */}
      <div className="mt-12">
        <h2 className="text-4xl font-extrabold text-center text-green-600 mb-6 animate-pulse">Quizzes</h2>
        <QuizSection quizzes={quizzes} />
      </div>
    </main>
  );
}