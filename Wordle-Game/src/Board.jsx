import React from 'react'

const Board = ({guesses}) => {
  return (
    <div className='board'>
        {guesses.map((__ , rowIndex) => (
            <div key={rowIndex} className='boardRows'>
                {new Array(5).fill('').map((__ , cellIndex) => (
                    <div key={cellIndex} className='boardCells'>
                        {cellIndex}
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Board