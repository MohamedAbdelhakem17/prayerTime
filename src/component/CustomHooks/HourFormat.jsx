const formatTime = (timeString) => {
    if (timeString) {
        const [hoursStr, minutesStr] = timeString.split(":");
        const hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);

        if (isNaN(hours) || isNaN(minutes) || minutes < 0 || minutes >= 60) {
            throw new Error("Invalid time format");
        }

        const period = hours < 12 ? "AM" : "PM";
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes} ${period}`;
    }
};

const useFormattedTime = (timeString) => {
    const formattedTime = formatTime(timeString);
    return formattedTime;
};

export default useFormattedTime;
