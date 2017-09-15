const RomanNumerals = function (){};

RomanNumerals.prototype.fromNumber = function(n) {
    let result = "";

    const numerals = [
        {value: 4, numeral: "IV"},
        {value: 1, numeral: "I"}
    ];

    numerals.forEach((item) => {
        for(; n >= item.value; n -= item.value) {
            result += item.numeral;
        }
    })
    return result;
}

module.exports = new RomanNumerals();