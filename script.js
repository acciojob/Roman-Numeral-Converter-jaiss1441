function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

		    let result = "";

    // Loop over the obj and process the Roman numerals
    for (let i = 0; i < 7; i++) {
        // While num is greater than or equal to the value of the current Roman numeral
        while (num >= obj[i][1]) {
            result += obj[i][0]; // Append the Roman numeral symbol to the result
            num -= obj[i][1];    // Subtract the value from num
        }
    }

    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
