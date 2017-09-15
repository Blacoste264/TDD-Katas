const RomanNumerals = function () {};

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

RomanNumerals.prototype.fromNumber = function (n) {
    let result = "";
    // numerals.forEach((item) => {
        for (let i = 0; i < numerals.length; ++i) {
            const item = numerals[i];
        for (; n >= item.value; n -= item.value) {
            result += item.numeral;
        }
    }
    return result;
}

module.exports = new RomanNumerals();