// Constructor method for PrimeFactors class
const PrimeFactors = function () {};

// Add new method "of" to PrimeFactors class
PrimeFactors.prototype.of = (n) => {
    let result = [];
    for (let divisor = 2; divisor <= n; ++divisor ){
        for (; 0 === n % divisor; n /= divisor) {
            result.push(divisor)
        }
    }
    return result;
}

// Export new instance of PrimeFactors
module.exports = new PrimeFactors();
