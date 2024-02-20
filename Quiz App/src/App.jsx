import "./App.css";
import React, { useState } from "react";
import {  questions} from './index';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [Score, setScore] = useState(0);
 

  const handleAnsBtn = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
   
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      console.log(questions[currentQuestion].isCorrect);
    } else {
      setShowScore(true);
    }

    if (isCorrect) {
    
      let currentScore = Score + 1;
      setScore(currentScore);
    }
  };
 

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {Score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option) => (
              <button
                key={option.answerText}
                onClick={() => handleAnsBtn(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
