"use strict";
exports.__esModule = true;
exports.Collatz = void 0;
var logger = require('./Logger.ts');
var Collatz = /** @class */ (function () {
    function Collatz() {
        this.stepCount = 0;
    }
    Collatz.prototype.calculateCollatz = function (n) {
        if (n === 1) {
            logger.logOutput("total steps: " + this.stepCount);
            return;
        }
        else if (n % 2 === 1) {
            logger.logOutput(n);
            n = (3 * n) + 1;
            this.stepCount++;
            this.calculateCollatz(n);
        }
        else {
            logger.logOutput(n);
            n = n / 2;
            this.stepCount++;
            this.calculateCollatz(n);
        }
    };
    return Collatz;
}());
exports.Collatz = Collatz;
