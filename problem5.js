function  calculateWatchTime( times ) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds = totalSeconds + times[i];
    }
    
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;
    
    return { hour: hour, minute: minute, second: second };
}

