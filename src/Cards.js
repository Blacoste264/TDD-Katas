// Constructor for Cards class
const Cards = function () {};

// Create new method whoWins for Cards class
Cards.prototype.whoWins = (pack1, pack2) => {
    const cardRank = "123456789TJQK"
    let scorePlayer1 = 0,
        scorePlayer2 = 0,
        i;

    calculateScore(); // Call calculateScore first
    return humanReadableScore(); // Take calculateScore's result, then plug into humanReadableScore for string output

    function calculateScore() { // Compare card values of pack1 to pack2 and add one to score if higher than pack2
        for (i = 0; i < pack1.length; ++i) {
            if (cardRank.indexOf(pack1[i]) < cardRank.indexOf(pack2[i])) {
                ++scorePlayer2;
            } else if (cardRank.indexOf(pack1[i]) > cardRank.indexOf(pack2[i])) {
                ++scorePlayer1;
            }
        }

        if (pack1.length > 1) { // If the pack1 has more than one card, continue to compare
            if (cardRank.indexOf(pack1[1]) < cardRank.indexOf(pack2[1])) {
                ++scorePlayer2;
            } else if (cardRank.indexOf(pack1[1]) > cardRank.indexOf(pack2[1])) {
                ++scorePlayer1;
            }
        };
    }

    function humanReadableScore() { // Provides string version of results so humans can read O_O
        if (scorePlayer2 > scorePlayer1) {
            return "Player 2 wins 1 to 0";
        } else if (scorePlayer1 > scorePlayer2) {
            return "Player 1 wins 1 to 0";
        } else {
            return "Tie";
        }
    };
}


// Export new instance of Cards class
module.exports = new Cards();
