const Cards = function () {};

Cards.prototype.whoWins = (pack1, pack2) => {
    if (pack1[0] < pack2[0]) {
        return "Player 2 wins 1 to 0";
    }
    else if (pack1[0] > pack2[0]) {
        return "Player 1 wins 1 to 0";
    }
    else {
        return "Tie";
    }
}

module.exports = new Cards();
