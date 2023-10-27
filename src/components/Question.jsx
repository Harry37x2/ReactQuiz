import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer';
import QUESTIONS from '../questions';
import Answers from './Answers';

const Question = ({index, onSelectAnswer, onSkipAnswer}) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let TIME = 10000
    if (answer.selectedAnswer) {
        TIME = 1000
    }
    if (answer.isCorrect !== null) {
        TIME = 2000
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(()=>{
                onSelectAnswer(answer)
            },2000)
        },1000)
    }
    let answerState = ''
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer) {
         answerState = 'answered'
    }
  return (
    <div id="question">
        <QuestionTimer 
            key={TIME}
            time={TIME} 
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
            mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>

        <Answers 
            answers={QUESTIONS[index].answers} 
            selectedAnswer={answer.selectedAnswer} 
            answerState={answerState} 
            onSelect={handleSelectAnswer} />     
    </div> 
  )
}

export default Question