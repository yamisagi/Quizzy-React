import React, { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id='question-time'
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};

export default QuestionTimer;
