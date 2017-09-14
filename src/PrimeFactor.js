const PrimeFactors = function() {};

PrimeFactors.prototype.of = (n) => {
    if(n === 2) {
        return [2];
    }
    else if(n === 3) {
        return [3]
    }
    return [];
}
module.exports = new PrimeFactors();

