import React, { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswersRef = useRef();

  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...answers];
    shuffledAnswersRef.current.sort(() => {
      return Math.random() - 0.5;
    });
  }
  return (
    <ul id='answers'>
      {shuffledAnswersRef.current.map((answer) => {
        let classes = '';
        const isSelected = selectedAnswer === answer;
        if (isSelected) {
          classes = 'selected';
        }
        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          classes = answerState;
        }
        return (
          <li key={answer} className='answer'>
            <button
              className={classes}
              disabled={answerState !== ''}
              onClick={() => {
                onSelect(answer);
              }}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
