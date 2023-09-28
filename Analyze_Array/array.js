function analyzeNumbers(arr) {
    // Check if the input array is empty
    if (arr.length === 0) {
      return {
        average: 0,
        min: undefined,
        max: undefined,
        length: 0,
      };
    }
  
    // Calculate the sum of all numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);
  
    // Calculate the average
    const average = sum / arr.length;
  
    // Find the minimum and maximum values
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    // Return the result as an object
    return {
      average,
      min,
      max,
      length: arr.length,
    };
}

module.exports = analyzeNumbers;