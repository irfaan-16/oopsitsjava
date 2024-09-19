"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Moon, Sun } from "lucide-react";
import questions, { categories } from "../data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Mock data for categories and questions with code

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedQuestion, setSelectedQuestion] = useState<null | Question>(
    null
  );
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredQuestions =
    selectedCategory === "All"
      ? questions
      : questions.filter((q) => q.category === selectedCategory.toLowerCase());

  return (
    <div
      className={`flex flex-col md:flex-row h-screen ${darkMode ? "dark" : ""}`}
    >
      {/* Left sidebar */}
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-900 p-6 shadow-md overflow-auto border-r border-gray-200 dark:border-gray-700 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Questions
          </h2>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="border-gray-300 dark:border-gray-600"
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-gray-100" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-gray-800" />
            )}
          </Button>
        </div>
        <Select
          onValueChange={setSelectedCategory}
          defaultValue={selectedCategory}
        >
          <SelectTrigger className="w-full mb-4 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ScrollArea className="h-[calc(100vh-200px)] pr-7">
          {filteredQuestions.map((question) => (
            <button
              key={question.id}
              className={`w-full text-left p-3 rounded-lg mb-2 flex items-center justify-between transition-colors ${
                selectedQuestion?.id === question.id
                  ? "bg-blue-600 text-white dark:bg-blue-700"
                  : "text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setSelectedQuestion(question)}
            >
              <span className="font-medium">{question.question}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Right content area */}
      <div className="flex-1 p-6 md:p-12 overflow-auto bg-gray-50 dark:bg-gray-800">
        {selectedQuestion ? (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              {selectedQuestion.question}
            </h2>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
              <code className="font-mono text-sm whitespace-pre-wrap break-words">
                {selectedQuestion.answer}
              </code>
            </pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Select a question to view its code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
