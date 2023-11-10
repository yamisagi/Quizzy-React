import React, { useState, useCallback } from 'react';
import questions from '../constants/quiz';
import completedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;

  const isQuizCompleted = activeQuestion === questions.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  }, []);

  const handleTimeOutAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizCompleted) {
    return (
      <div id='summary'>
        <img src={completedImg} alt='Quiz Completed' />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestion].answers];

  shuffledAnswers.sort(() => {
    return Math.random() - 0.5;
  });

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={10000}
          onTimeOut={handleTimeOutAnswer}
          key={activeQuestion}
        />
        <h2>{questions[activeQuestion].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className='answer'>
                <button
                  onClick={() => {
                    handleSelectAnswer(answer);
                  }}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
