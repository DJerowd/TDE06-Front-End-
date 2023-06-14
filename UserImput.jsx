import React, { useState } from 'react';

const UserInput = () => {

  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  const handleButtonClick = () => {
    setDisplayText(inputText);
    setInputText('');
  };


  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange}/>
      <button onClick={handleButtonClick}>Exibir</button>
      {displayText && <h4>{displayText}</h4>}
    </div>
  );
};

export default UserInput;