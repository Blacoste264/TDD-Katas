const bowling = require("../src/Bowling")

describe("Bowling", () => {
    it("all gutters", () => {
        for (i = 0; i < 20; ++i) {
            bowling.addThrow(0);
        }  
    })
})