function convertToRoman(num) {
  	 const romanSymbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = '';

  // Loop through each symbol
  for (let i = 0; i < romanSymbols.length; i++) {
    const [symbol, value] = romanSymbols[i];

    // While num is greater than or equal to the value, append the symbol
    while (num >= value) {
      result += symbol;  // Append the Roman numeral symbol to the result
      num -= value;      // Subtract the value from num
    }
  }

  return result;  // Return the final Roman numeral string
}

	

		  
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
