// returns the current time and date in string format
function getCurrentTime() {
    let now = new Date();
    let hour = getHourString(now)
    let minute = getMinuteString(now);
    let ampm = getAmPmString(now);
    let date = now.toLocaleDateString();

    return hour + ":" + minute + " " + ampm + " on " + date;
}

// takes in a Date and returns a string of hours, converted to non-military time
function getHourString(dateObj) {
    let hour = dateObj.getHours();
    if (hour === 0) {
        return "12";
    } else if (hour > 12) {
        return (hour - 12) + "";
    }
    return hour + "";
}

// takes in a Date and returns a string of minutes, with 0 in front if single digit
function getMinuteString(dateObj) {
    let minute = dateObj.getMinutes();
    if (minute < 10) {
        return "0" + minute;
    }
    return minute + "";
}

// takes in a date object and returs a string "AM" or "PM" based on what time it is
function getAmPmString(dateObj) {
    if (dateObj.getHours() < 12) {
        return "AM";
    }
    return "PM";
}