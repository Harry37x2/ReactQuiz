import React, {useCallback,useState} from 'react'
import QUESTIONS from '../questions'
import Question from './Question';
import Summary from './Summary';


const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswer((prevState) => {
                return [
                    ...prevState, 
                    selectedAnswer
                ]
            });
        },[])

    const handleSkipAction = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswer={userAnswer} />
    }
  

  return (
    <div id="quiz">
        <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAction} 
        />
    </div>   
  )
}

export default Quiz