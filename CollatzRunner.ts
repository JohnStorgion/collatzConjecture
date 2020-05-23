import { Collatz } from "./Collatz"
import { UserInputHandler } from "./UserInputHandler"

class CollatzRunner {
    private collatz: Collatz;
    private userInput: UserInputHandler;

    async promptUser() {
        
        this.userInput = new UserInputHandler();
        this.collatz = new Collatz();

        while(true) {
            let inputValue: number = await this.userInput.getUserInput()
            
            if(inputValue < 0) {
                break;
            }

            this.collatz.calculateCollatz(inputValue);
        }              
    }       
}

let runner: CollatzRunner = new CollatzRunner();
runner.promptUser();




