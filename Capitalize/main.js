/** Returning the first letter Capitalized */
function capitalizeFirstLetter(str) {
    const capitalized = str[0].toUpperCase();
    return capitalized + str.slice(1);
}
module.exports = capitalizeFirstLetter;