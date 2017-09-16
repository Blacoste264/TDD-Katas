const RomanNumerals = function () {};
// Function to quickly create objects containing value and numeral
const numeral = (value, numeral) => {
    return {value: value, numeral: numeral};
}

const numerals = [
    numeral(1000, "M"),
    numeral(900, "CM"),
    numeral(500, "D"),
    numeral(400, "CD"),
    numeral(100, "C"),
    numeral(90, "XC"),
    numeral(50, "L"),
    numeral(40, "XL"),
    numeral(10, "X"),
    numeral(9, "IX"),
    numeral(5, "V"),
    numeral(4, "IV"),
    numeral(1, "I")
];
// Create new fromNumber method for Cards class
RomanNumerals.prototype.fromNumber = (n) => {
    let result = "";
    numerals.forEach((item) => {
        for (; n >= item.value; n -= item.value) {
            result += item.numeral;
        }
    })
    return result;
}
// Export new RomanNumerals object
module.exports = new RomanNumerals;
