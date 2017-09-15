const RomanNumerals = require("../src/RomanNumeral")

describe("RomanNumeral", function() {
    it("converts numbers into Roman Numerals", function() {
        expect(RomanNumerals.fromNumber(1).toBe("I"));

    })
})