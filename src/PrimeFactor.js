const PrimeFactors = function () {};

PrimeFactors.prototype.of = (n) => {
    let result = [];
    while (n > 1) {
        let divisor = 2
        while (n <= n) {
            while (0 === n % divisor) {
                result.push(divisor);
                n /= divisor;
            }
        }
        ++divisor;
    }
    return result;
}

module.exports = new PrimeFactors();
