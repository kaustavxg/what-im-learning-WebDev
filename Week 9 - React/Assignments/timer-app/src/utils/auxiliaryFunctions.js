//! converting total time into hours, mins and seconds
export const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return{
        hours: hours.toString().padStart(2, '0'), // jab tak string ki length 2 nai ho jaati add, 0 on the left side
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    }
}

export const calculateTime = (hours, minutes, seconds) => {
    const calculateTime = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    return isNaN(calculateTime) ? 0 : calculateTime
}
