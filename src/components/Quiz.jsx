import React, { useState, useCallback, useRef } from 'react';
import questions from '../constants/quiz';
import completedImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestion =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const isQuizCompleted = activeQuestion === questions.length;

  const handleSelectAnswer = useCallback(
    (answer) => {
      setAnswerState('answered');
      setUserAnswers((prev) => [...prev, answer]);
      setTimeout(() => {
        if (answer === questions[activeQuestion].answers[0]) {
          // First answer is correct answer for every questions
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestion]
  );

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
      <div id='question'>
        <QuestionTimer
          key={activeQuestion}
          timeout={10000}
          onTimeOut={handleTimeOutAnswer}
        />
        <h2>{questions[activeQuestion].text}</h2>
        <Answers
          key={activeQuestion + 1}
          answers={questions[activeQuestion].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
