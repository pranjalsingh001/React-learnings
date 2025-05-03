import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Keyboard from './Keyboard.jsx'
import Board from './board.jsx'


function App() {

  const api_url = "https://api.datamuse.com/words?sp=?????&max=1000"
  const rows = 6
  const [ansWord , setAnsWord]=useState('')
  const [guesses , setGuesses]=useState(new Array(rows).fill(''))
  const [currentWord , setCurrentWord]=useState('')
  const [currentRow , setCurrentRow]=useState(0)
  

//fetch word from api
  useEffect( () => {
  const fetchData =  async ()=>{
      try {
        const res = await fetch(api_url)
        const data = await res.json()
        // converting array of objets into array of key.value
        const letterArr= data.map(obj => obj.word)
        const rendomWord = letterArr[Math.floor(Math.random()*letterArr.length)]
        setAnsWord(rendomWord.toUpperCase())
      } catch (error) {
        console.error("Error fetcing data" , error);
      }
    }
    fetchData()
  } , [])
 
//track the key when user typed and insret in the guesses array
  const hendelKeyEvent = useCallback((e) => {
    const {keyCode , key} = e

    if (keyCode === 8 && currentWord.length) {
      setCurrentWord((currentWord) => (currentWord.slice(0,-1)))
      return
    };
    if (currentWord.length===5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      if (keyCode !== 13) {
        return
      } else {
        setGuesses(guesses => guesses.map((letter , idx) =>
         (idx === currentRow ? currentWord : letter)
        ))

        setCurrentRow(currentRow => currentRow+1)
        setCurrentWord('')
        return
      }
    }
    if (keyCode>=65 && keyCode<=90) {
      setCurrentWord((currentWord) => (currentWord + key.toUpperCase()))
      return
    }
  },[currentRow,currentWord])
  useEffect(() => {
    document.addEventListener('keydown',hendelKeyEvent)
  
    return () => {
      document.removeEventListener('keydown',hendelKeyEvent)
    }
  }, [hendelKeyEvent])
  
//hendal win loos condition
useEffect(() => {
  ansWord===guesses[currentRow -1] && ansWord ? console.log('you win'):console.log('you loss');
  
},[guesses,ansWord,currentRow]) 

  return (
    <>
      {ansWord}
      <Board 
        guesses={guesses} 
        currentRow={currentRow} 
        currentWord={currentWord} 
        ansWord={ansWord}
      />
      <Keyboard/>
     
    </>
  )
}

export default App
