const PrimeFactors = function() {};

PrimeFactors.prototype.of = (n) => {
    const result = [];
    while(n > 1) {
        if(0 === n % 2){
            result.push(2);
            n /= 2
        }
        else {
            result.push(2);
            break;
        }
    }
    return result;
}

module.exports = new PrimeFactors();

