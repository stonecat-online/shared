export const roundNumber = (number) => {
    return number % 1 !== 0 ? parseFloat(number).toFixed(2) : Math.trunc(number);
};
