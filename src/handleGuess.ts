import { WordsList } from "./WordsList"

export let guessArray = ["","","","",""]

export const handleGuessInServer = (currentGuess:string[], theWord:string[]):string[]=>{
           console.log("theword",theWord)

    
    for (let i = 0; i < 5;i+=1) {
        console.log("currentguess[i]",currentGuess[i])
       const indexToCompare = theWord.indexOf(currentGuess[i])
       console.log("indextocompare in for", indexToCompare)
       if (indexToCompare === -1){
         guessArray[i] = "error"
       } else if (theWord[i] === currentGuess[i]){
        guessArray[i] = "correct"
       } else {
        guessArray[i] = "almost"
       }
    }
    console.log("guessarray",guessArray)
    return guessArray
    
    

    }
    

