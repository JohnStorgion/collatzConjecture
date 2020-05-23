import * as readline from 'readline'

export class UserInputHandler {   
    private rl;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public async getUserInput():Promise<number> {
        return new Promise((resolve, reject) => {
            this.rl.question("Enter number to test Collatz conjecture: ", (input: string) => {            
                if(+input <= 0) {
                    this.rl.close()
                }
                resolve(+input);
            })
        })         
    }
}