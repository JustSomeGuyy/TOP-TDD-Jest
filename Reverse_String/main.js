function reverseString(str) {
    const stringLetters = str.split("");
    const arrayReversed = stringLetters.reverse();
    const joinArray = arrayReversed.join("");
    return joinArray;
}

module.exports = reverseString;