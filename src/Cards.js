const Cards = function () {};

Cards.prototype.whoWins = (pack1, pack2) => {
    const cardRank = "123456789TJQK"
    let scorePlayer1 = 0,
        scorePlayer2 = 0,
        i;

    calculateScore();
    return humanReadableScore();

    function calculateScore() {
        for (i = 0; i < pack1.length; ++i) {
            if (cardRank.indexOf(pack1[i]) < cardRank.indexOf(pack2[i])) {
                ++scorePlayer2;
            } else if (cardRank.indexOf(pack1[i]) > cardRank.indexOf(pack2[i])) {
                ++scorePlayer1;
            }
        }

        if (pack1.length > 1) {
            if (cardRank.indexOf(pack1[1]) < cardRank.indexOf(pack2[1])) {
                ++scorePlayer2;
            } else if (cardRank.indexOf(pack1[1]) > cardRank.indexOf(pack2[1])) {
                ++scorePlayer1;
            }
        };
    }

    function humanReadableScore() {
        if (scorePlayer2 > scorePlayer1) {
            return "Player 2 wins 1 to 0";
        } else if (scorePlayer1 > scorePlayer2) {
            return "Player 1 wins 1 to 0";
        } else {
            return "Tie";
        }
    };
}



module.exports = new Cards();
