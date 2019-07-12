export const computeSessionTime =  (minutes) => {
    const currentTime = Date.now();
    return new Date(currentTime + minutes*60000).getTime();
}