import React from 'react'
import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '../questions'

const Summary = ({userAnswer}) => {
    const skippedAnswers = userAnswer.filter(answer => answer === null)
    const correctAnswers = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0])

    const skippedAnswersShared = Math.round((skippedAnswers.length / userAnswer.length) *100)
    const correctAnswersShared = Math.round((correctAnswers.length / userAnswer.length) *100)
    const wrongAnswersShared = 100 - skippedAnswersShared - correctAnswersShared


  return (
    <div id="summary">
            <img src={quizCompleteImg} alt="Quiz complete img" />
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswersShared}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShared}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShared}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswer.map((answer, index) => {
                    let cssClass = 'user-answer'

                    if (answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct'
                    } else  {
                        cssClass += ' wrong'
                    }

                    return (                        
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
  )
}

export default Summary