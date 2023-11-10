import React, { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    console.log('Mounted Timer');
    return () => {
      console.log('Unmounted Timer');
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    console.log('Mounted Interval');
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

    return () => {
      console.log('UnMounted Interval');
      clearInterval(interval);
    };
  }, []);

  return <progress id='question-time' max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
