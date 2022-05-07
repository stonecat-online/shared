export const onlyContainsLetters = (string: string) => {
    return /^[a-zA-Z]+$/.test(string);
}