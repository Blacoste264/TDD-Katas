const cards = require("../src/Cards");
const cardRank = "123"

describe("Cards game", () => {
    it("Wins with the highest card in a single game", () => {
        expect(cards.whoWins(["1"], ["2"])).toEqual("Player 2 wins 1 to 0");
    })
    it("Wins with the highest card in the other pack in a single game", () => {
        expect(cards.whoWins(["2"], ["1"])).toEqual("Player 1 wins 1 to 0");
    })
    it("Ties", () => {
        expect(cards.whoWins(["1"], ["1"])).toEqual("Tie");
    })
    it("Knows the card ranking which not always matches the correct order", () => {
        expect(cards.whoWins(["K"], ["Q"])).toEqual("Player 1 wins 1 to 0");
    })
    it("Wins with several cards", () => {
        expect(cards.whoWins(["1", "2"], ["1", "1"])).toEqual("Player 1 wins 1 to 0");
    })
})