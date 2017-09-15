const RomanNumerals = function (){};

RomanNumerals.prototype.fromNumber = function(n) {
    let result = "";
    while (n > 0) {
        result += "I"
        --n;
    }
    return result;
}

module.exports = new RomanNumerals();