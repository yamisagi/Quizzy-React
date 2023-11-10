import React, { useState, useCallback, useRef } from 'react';
import questions from '../constants/quiz';
import Question from './Question';
import Summary from './Summary';

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
    return <Summary userAnswers={userAnswers} />;
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
