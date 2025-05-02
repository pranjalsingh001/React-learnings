import { useEffect, useState } from 'react'
import './App.css'
import Board from './board'

function App() {

  const api_url = "https://api.datamuse.com/words?sp=?????&max=1000"
  const rows = 6
  const [ansWord , setAnsWord]=useState('')
  const [guesses , setGuesses]=useState(new Array(rows).fill(''))
  


  useEffect( () => {
  const fetchData =  async ()=>{
      try {
        const res = await fetch(api_url)
        const data = await res.json()
        // converting array of objets into array of key.value
        const letterArr= data.map(obj => obj.word)
        const rendomWord = letterArr[Math.floor(Math.random()*letterArr.length)]
        setAnsWord(rendomWord)
      } catch (error) {
        console.error("Error fetcing data" , error);
      }
    }
    fetchData()
  } , [])
  
  return (
    <>
      <h1>{ansWord}</h1>
      <Board guesses={guesses}/>
    </>
  )
}

export default App
