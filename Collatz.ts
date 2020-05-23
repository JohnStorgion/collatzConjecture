const logger = require('./Logger.ts')
export class Collatz {
    private stepCount: number;

    constructor() {
        this.stepCount = 0;
    }

    public calculateCollatz(n: number): number {
        if (n === 1) {
            logger.logOutput(`total steps: ${this.stepCount}`);
            return;
        }

        if (n % 2 === 1) {
            logger.logOutput(n);
            n = (3*n) + 1;
            this.stepCount++;
            
            this.calculateCollatz(n);
        }

        else {
            logger.logOutput(n);
            n = n/2;
            this.stepCount++;

            this.calculateCollatz(n);
        }
    }

}