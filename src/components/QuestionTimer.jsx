import React, { useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeOut }) => {
  useEffect(() => {
    setTimeout(() => {}, timeout);
  });

  return <progress id='question-time' />;
};

export default QuestionTimer;
