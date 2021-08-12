import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import { useState } from 'react';
import carsContext from './context/carsContext';

function App() {
  const [cars, setCars] = useState({red: false, blue: false, yellow: false});
  const [signal, setSignal] = useState({color: 'red'});
  const moveCar = (car, side) => setCars({...cars, [car]: side});
  const changeSignal = (color) => setSignal({...signal, color})

  const contextValue = {
    cars, signal, moveCar, changeSignal
  }
  return (
    <div className="container">
      <carsContext.Provider value={contextValue}>
        <Cars />
        <TrafficSignal />
      </carsContext.Provider>
    </div>
  );
}

export default App;
