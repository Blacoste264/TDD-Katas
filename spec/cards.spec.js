const cards = require("../src/Cards");
const cardRank = "123"

describe("Cards game", () => {
    it("Wins with the highest card in a single game", () => {
        expect(cards.whoWins(["1"], ["2"])).toEqual("Player 2 wins 1 to 0");
    })
    it("Wins with the highest card in the other pack in a single game", () => {
        expect(cards.whoWins(["2"], ["1"])).toEqual("Player 1 wins 1 to 0");
    })
})