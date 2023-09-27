function cipher(str, num) {
    let solved = '';
    for (let i = 0; i < str.length; i += 1) {
        const charNum = str[i].charCodeAt();
        if (charNum >= 65 && charNum <= 77) {
            solved += String.fromCharCode(charNum + num)
        } else if (charNum >= 78 && charNum <= 90) {
            solved += String.fromCharCode(charNum - num);
        } else {
            solved += str[i];
        }
    }
    return solved;
}

module.exports = cipher;