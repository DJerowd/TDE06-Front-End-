import React, { useState } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([2, 5, 1, 8, 6, 40, 9, 2, 19, 2]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...numbers].sort((a, b) => a - b);
      setSortedNumbers(sorted);
      setIsSorted(true);
    } else {
      setSortedNumbers([]);
      setIsSorted(false);
    }
  };

  return (
    <div>
      <h3>Números:</h3>
      {!isSorted ? (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {sortedNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
      <button onClick={handleSort}>
        {isSorted ? 'Desordenar' : 'Ordenar'}
      </button>
    </div>
  );
};

export default NumberList;