const primeFactors = require("../src/PrimeFactor")

describe("Prime Factorization", function() {
    it("Calculates the Prime Factorization of an integer", function() {
        expect(primeFactors.of(1)).toEqual([]);
        expect(primeFactors.of(2)).toEqual([2]);
        expect(primeFactors.of(3)).toEqual([3]);
        expect(primeFactors.of(4)).toEqual([2, 2]);
        expect(primeFactors.of(5)).toEqual([5]);
        expect(primeFactors.of(6)).toEqual([2, 3]);
        expect(primeFactors.of(7)).toEqual([7]);
        expect(primeFactors.of(8)).toEqual([2, 2, 2]);
        expect(primeFactors.of(8)).toEqual([3, 3]);
    })
})

describe("RomanNumeral", function() {
    it("converts numbers into Roman Numerals", function() {

    })
})