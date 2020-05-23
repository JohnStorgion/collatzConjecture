var Collatz_1 = require("./Collatz");
var UserInputHandler_1 = require("./UserInputHandler");
var CollatzRunner = (function () {
    function CollatzRunner() {
        this.async = promptUser();
    }
    return CollatzRunner;
})();
{
    this.userInput = new UserInputHandler_1.UserInputHandler();
    this.collatz = new Collatz_1.Collatz();
    while (true) {
        var inputValue = await;
        this.userInput.getUserInput();
        if (inputValue < 0) {
            break;
        }
        this.collatz.calculateCollatz(inputValue);
    }
}
var runner = new CollatzRunner();
runner.promptUser();
