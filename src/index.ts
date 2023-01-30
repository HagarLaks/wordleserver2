
const express = require("express");
const http = require("https");
const request = require('request');
import cors from "cors";
import { getRandomWordIndex } from "./GetRandomWord";
import { handleGuessInServer, guessArray } from "./handleGuess";
import { WordsList } from "./WordsList";
const app = express();
const port = 3333;

app.use(cors({ origin: 'http://localhost:3000' }));


export let currentGuess:string[] = ["",""]
export let theWord:string[] = ["",""]

app.get('/thewordindex', (req:Request, res:Response) => {
  const a = getRandomWordIndex();
  console.log(a)
  theWord = WordsList[a].split('')
  console.log("todays word", theWord)
  res.json(a)
  
 })

app.use(express.json());



app.post('/word', (req:Request, res:Response) => {
  currentGuess = (req.body.word).split('');
  console.log("current guess", currentGuess);
  handleGuessInServer(currentGuess, theWord)

});

app.get('/feedbackarray', (req:Request, res:Response) => {
  
  res.status(200).json({ guessArray });
});

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})