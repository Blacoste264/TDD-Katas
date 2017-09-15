const RomanNumerals = function (){};

RomanNumerals.prototype.fromNumber = function(n) {
    let result = "";

    const numerals = [
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"}
    ];

    numerals.forEach((item) => {
        while(n >= item.value) {
            result += item.numeral;
            n -= item.value;
        }
    })
    return result;
}

module.exports = new RomanNumerals();