var readline = require('readline');
var UserInputHandler = (function () {
    function UserInputHandler() {
        this.async = getUserInput();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    UserInputHandler.prototype.Promise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.rl.question("Enter number to test Collatz conjecture: ", function (input) {
                if (+input < 0) {
                    _this.rl.close;
                }
                resolve(+input);
            });
        });
    };
    return UserInputHandler;
})();
exports.UserInputHandler = UserInputHandler;
