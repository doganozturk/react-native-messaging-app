export function pad(num) {
    return `0${num}`.slice(-2);
}

export function getTimeFromDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${pad(hours)}:${pad(minutes)}`;
}
