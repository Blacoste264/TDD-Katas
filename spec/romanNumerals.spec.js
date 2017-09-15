const romanNumerals = require("../src/RomanNumerals")

describe("RomanNumeral", function() {
    it("converts numbers into Roman Numerals", function() {
        expect(romanNumerals.fromNumber(1)).toBe("I");
        expect(romanNumerals.fromNumber(2)).toBe("II");
        expect(romanNumerals.fromNumber(3)).toBe("III");
        expect(romanNumerals.fromNumber(4)).toBe("IV");
    })
})