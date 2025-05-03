import React from 'react'

const Row = ({word}) => (
    new Array(5).fill('').map((__ , cellIdx) => (
        <div key={cellIdx} className='boardCells'>
            {word[cellIdx] ?? ""}
        </div>
    ))
)

const Board = ({guesses,currentRow,currentWord}) => {
  return (
    <div className='board'>
        {guesses.map((__ , rowIdx) => (
            <div key={rowIdx} className='boardRows'>
               <Row
                word ={rowIdx === currentRow ? currentWord : guesses[rowIdx]}
               /> 
            </div>
        ))}
    </div>
  )
}

export default Board