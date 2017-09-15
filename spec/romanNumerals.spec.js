const romanNumerals = require("../src/RomanNumerals")

describe("RomanNumeral", () => {
    it("converts numbers into Roman Numerals", () => {
        expect(romanNumerals.fromNumber(1)).toBe("I");
        expect(romanNumerals.fromNumber(2)).toBe("II");
        expect(romanNumerals.fromNumber(3)).toBe("III");
        expect(romanNumerals.fromNumber(4)).toBe("IV");
        expect(romanNumerals.fromNumber(2648)).toBe("MMDCXLVIII");
    })
})