import { useEffect, useState } from "react"

function CountDown(){
    const [count, setCount] = useState(10)
    const [isRunning, setIsrunning] = useState(false)
    useEffect(() => {
    const intervalId = setInterval(() => {
        if(!isRunning) {return}
        setCount(c => {
            if(c <=0 ){
                clearInterval(intervalId)
                return 0
             }
             return c - 1
        })
    }, 1000)
    return () => clearInterval(intervalId)
    },[isRunning])
    const handleClick = () => {
        if(count > 0) {
            setIsrunning(true)
        }
    }
    return(
        <div>
            <h2>count down: {count}</h2>
            <button onClick={handleClick}>clickToCountDown</button>
        </div>
    )
}

export default CountDown
