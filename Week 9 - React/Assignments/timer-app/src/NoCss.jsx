import React, { useState, useEffect } from 'react';
import { formatTime, calculateTime } from '../utils/auxiliaryFunctions';

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [initialTime, setInitialTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [editState, setEditState] = useState({ field: null, value: '' });

  // Progress effect (kept logic, no CSS var updates)
  useEffect(() => {
    const progress = initialTime > 0 ? (time / initialTime) * 100 : 0;
    console.log("Progress:", progress); // just log it for now
  }, [time, initialTime]);

  // Countdown effect
  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  // Handle editing of fields
  const handleEditField = (field) => {
    if (editState.field === field) {
      const newTime = {
        ...formatTime(time),
        [field]: editState.value.padStart(2, '0')
      };

      const calculatedTime = calculateTime(newTime.hours, newTime.minutes, newTime.seconds);

      setTime(calculatedTime);
      setInitialTime(calculatedTime);
      setEditState({ field: null, value: '' });

    } else {
      setIsRunning(false);
      setEditState({ field, value: formatTime(time)[field].replace(/^0+/, '') });
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    setEditState((prevState) => ({ ...prevState, value }));
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div>
      <div>
        <div>
          <div>
            {editState.field === 'hours' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('hours')}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('hours')}>{hours}</span>
            )}
            :
            {editState.field === 'minutes' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('minutes')}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('minutes')}>{minutes}</span>
            )}
            :
            {editState.field === 'seconds' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('seconds')}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditField('seconds')}>{seconds}</span>
            )}
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => { setTime(0); setInitialTime(0); setIsRunning(false); }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
