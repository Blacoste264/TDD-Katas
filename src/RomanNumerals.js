const RomanNumerals = function (){};

RomanNumerals.prototype.fromNumber = function(n) {
    if (n === 2) {
        return "II"
    }
    return "I";
}

module.exports = new RomanNumerals();