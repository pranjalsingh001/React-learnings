import React from 'react';

function Keyboard() {
  const letters = ['QWERTYUIOP', 'ASDFGHJKL+', 'ZXCVBNM-'];

  return (
    <div className='keyboard'>
      {letters.map((KeyboardRow, rowIndex) => (
        <div key={rowIndex} className='keyboardRows'>
          {KeyboardRow.split('').map((keyLetter, keyIndex) => (
            <div key={keyIndex} className='keyLetters'>
              {keyLetter === '+' ? 'Enter' : keyLetter === '-' ? 'Delete' : keyLetter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
