import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { QUIZ_DATA } from "./QuizData";

const getRandomQuestions = (data: typeof QUIZ_DATA, count: number) => {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<typeof QUIZ_DATA>([]);
  const [currentQues, setCurrentQues] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ quesNo: number; selected: string }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const randomQs = getRandomQuestions(QUIZ_DATA, 5);
    setQuestions(randomQs);
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert("Please select an option first!");
      return;
    }

    setAnswers([...answers, { quesNo: questions[currentQues].quesNo, selected: selectedOption }]);

    if (currentQues < questions.length - 1) {
      setCurrentQues(currentQues + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setQuestions(getRandomQuestions(QUIZ_DATA, 5));
    setCurrentQues(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsCompleted(false);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const question = questions[currentQues];

  const score = answers.filter(
    (ans, idx) => ans.selected === questions[idx].correctAns
  ).length;

  return (
    <div className="quiz-container">

      {!isCompleted ? (
        <>
          <h2>Quiz App</h2>

          <h3>Question: {question.ques}</h3>

          <div className="options">
            {[question.option1, question.option2, question.option3, question.option4].map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedOption === opt ? "selected" : ""}`}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <button className="next-btn" onClick={handleNextQuestion}>
            {currentQues === questions.length - 1 ? "Finish" : "Next Question"}
          </button>

          <p className="question-count">
            Question {currentQues + 1} of {questions.length}
          </p>
        </>
      ) : (
        <>
         <h3>🎉 Quiz Completed!</h3>
          <h3>Your Score: {score} out of {questions.length}</h3>
          <p className="feedback-text">
            {score === questions.length
              ? "Excellent! Perfect score!"
              : score > questions.length / 2
              ? "Good job! You did well!"
              : "Keep practicing! You’ll get better!"}
          </p>
          <button className="restart-btn" onClick={handleRestart}>
            🔁 Test Again
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
