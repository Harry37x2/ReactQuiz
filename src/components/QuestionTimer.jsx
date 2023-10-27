import React, { useEffect, useState } from 'react'

const QuestionTimer = ({time, onTimeout, mode}) => {
    const [progress, setProgress] = useState(time);

    useEffect(()=>{
        const timeout = setTimeout(onTimeout,time)

        return () => {
            clearTimeout(timeout)
        }

    },[onTimeout, time])
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prevState)=>prevState - 100)
        },100)

        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div className="">
        <progress id='question-time' value={progress} max={time} className={mode}/>
    </div>
  )
}

export default QuestionTimer