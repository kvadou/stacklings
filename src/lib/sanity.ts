// src/lib/sanity.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "k5pun9b0",
  dataset: "production",
  apiVersion: "2023-06-08",
  useCdn: true,
});

export async function getModules() {
  const modules = await sanityClient.fetch(`*[_type == "module"]{
    _id,
    title,
    description,
    "lessons": *[_type == "lesson" && references(^._id)]{
      _id,
      title,
      content
    }
  }`);
  return modules;
}

// ✅ NEW FUNCTION: Fetch quizzes
export async function getQuizzes() {
  const quizzes = await sanityClient.fetch(`*[_type == "quiz"]{
    _id,
    title,
    questions[]{
      question,
      options,
      answer
    }
  }`);
  return quizzes;
}