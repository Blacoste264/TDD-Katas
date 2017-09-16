const cards = require("../src/Cards");

describe("Cards game", () => {
    it("Winds with the highest card in a single game", () => {
        expect(cards.whoWins(["1"], ["2"])).toEqual("Player 2 wins 1 to 0");
    })
})