import React, { useEffect, useState } from "react"
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions"
import style from "./Timer.module.css"

function Timer(){
    const [time, setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false); // is the count down running or Paused
    const[editState, setEditState] = useState({field: null, value: ''});

    //# Progress effect (kept logic, no CSS var updates)
    useEffect(() => {
        const progress = initialTime > 0 ? (time/initialTime) * 100 : 0;
        console.log("Progress: ", progress);

    }, [time, initialTime])

    //# Countdown effect
    // =================================================================
    useEffect(() => {
        let interval = null;
        if(isRunning && time > 0){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000)
        } else if(time == 0){
            setIsRunning(false);
        }
        return() => {
            if(interval) clearInterval(interval);
        };
    }, [isRunning, time])
    // =================================================================

    // for sound timer
    useEffect(() => {
        if(time === 0 && initialTime > 0){
            const audio = new Audio('/timer.mp3');
            audio.play().catch(error => console.log(`error in sound playing: ${error}`))
        }
    }, [time, initialTime])


    // =================================================================
    //# Handle editing of fields
    //! 1. start editing (pause timer + open input)
    const startEditing = (field) => {
        setIsRunning(false); // pause the timer while editing 
        setEditState({
            field,
            value: formatTime(time)[field].replace(/^0+/, '')
        });
    }

    //! 2. finish editing
    const finishEditing = (field) => {
        const newTime = {
            ...formatTime(time),
            [field]: editState.value.padStart(2, '0') // add leading 0 if needed
        };

        const calculatedTime = calculateTime( // converts the time into total seconds
        // eg: calculatedTime("01", "07", "10") -> 1*3600 + 7*60 + 10 = 4030 seconds
            newTime.hours,
            newTime.minutes,
            newTime.seconds
        );

        setTime(calculatedTime);
        setInitialTime(calculatedTime);
        setEditState({field: null, value: ''}) // exit edit mode 

    }
    // =================================================================



    // Handle input changes
    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 2);
        setEditState((prevState) => ({ ...prevState, value}))
    };

    const {hours, minutes, seconds} = formatTime(time);

    
    return (
        <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            {editState.field === 'hours' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => finishEditing('hours')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => startEditing('hours')}>{hours}</span>
            )}
            :
            {editState.field === 'minutes' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => finishEditing('minutes')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => startEditing('minutes')}>{minutes}</span>
            )}
            :
            {editState.field === 'seconds' ? (
              <input
                className={style.timeInput}
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => finishEditing('seconds')}
                autoFocus
              />
            ) : (
              <span className={style.timeUnit} onClick={() => startEditing('seconds')}>{seconds}</span>
            )}
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton} onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'} {/* Toggle between Start and Pause */}
        </button>
        <button className={style.actionButton} onClick={() => { setTime(0); setInitialTime(0); setIsRunning(false); }}>
          Reset {/* Reset the timer */}
        </button>
      </div>
    </div>
  );
};

export default Timer

