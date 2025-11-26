// src/App.tsx

import { useEffect, useState } from "react";
import "./App.css";

export interface QuestionItem {
  question: string;
  answers: string[];
  numOfAnswers: number;
  maxNumOfCorrectAnswers: number;
}

export interface QuestionsResponse {
  [key: string]: QuestionItem;
}

function App() {
  const [questions, setQuestions] = useState<QuestionsResponse>({});

  const fetchData = async () => {
    const response = await fetch("/api/questions");
    const data: QuestionsResponse = await response.json();
    console.log("Fetched:", data);
    setQuestions(data);
  };

  // Run fetchData once when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <pre>{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}

export default App;
