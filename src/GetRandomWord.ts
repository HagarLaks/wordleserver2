
export const getRandomWordIndex = () =>{
  
  const theWordOfTheDayIndex = Math.floor(Math.random() * (18 - 1))+1

  return (theWordOfTheDayIndex)
}

