const primeFactors = require("../src/PrimeFactor")

describe("Prime Factorization", function() {
    it("Calculates the Prime Factorization of an integer", function() {
        expect(primeFactors.of(1)).toEqual([]);
        expect(primeFactors.of(2)).toEqual([2])
    })
})