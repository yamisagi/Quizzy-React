import React from 'react';
import completedImg from '../assets/quiz-complete.png';
import questions from '../constants/quiz';

const Summary = ({ userAnswers }) => {
  console.log(userAnswers);
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  console.log(skippedAnswers, correctAnswers);

  const skippedPerc = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctPerc = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const incorrectPerc = 100 - skippedPerc - correctPerc;
  return (
    <div id='summary'>
      <img src={completedImg} alt='Quiz Completed' />
      <h2>Quiz Bitti</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedPerc}%</span>
          <span className='text'>Geçilen Sorular</span>
        </p>
        <p>
          <span className='number'>{correctPerc}%</span>
          <span className='text'>Doğru Cevaplar</span>
        </p>
        <p>
          <span className='number'>{incorrectPerc}%</span>
          <span className='text'>Yanlış Cevaplar</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = 'user-answer';
          if (answer === null) {
            classes += ' skipped';
          } else if (answer === questions[index].answers[0]) {
            classes += ' correct';
          } else {
            classes += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{questions[index].text}</p>
              <p className={classes}>{answer ?? 'Soru Geçildi'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
