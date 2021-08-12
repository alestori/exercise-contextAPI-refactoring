import React, { useState } from 'react';
import './App.css';
import Cars from './Cars';
import carsContext from './Context/carsContext';

function App() {
  const [cars, setValue] = useState({ red: false, blue: false, yellow: false});

  const moveCar = (car, side) => {
    setValue({...cars, [car]: side })
  }

  const contextValue = {
    cars, moveCar
  }

  return (
    <carsContext.Provider value={contextValue}>
      <Cars />
    </carsContext.Provider>
  );
}

export default App;
