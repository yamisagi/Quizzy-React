import React, { useState, useCallback, useRef } from 'react';
import questions from '../constants/quiz';
import completedImg from '../assets/quiz-complete.png';
import Question from './Question';

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

  return (
    <div id='quiz'>
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onTimeOut={handleTimeOutAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Quiz;
