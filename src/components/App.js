import React, { useState } from 'react';
import myContext, { MyProvider } from '../context/MyContext';
import "./App.css"
import Family from './Family';

function App() {
  
  return (
    <MyProvider>
    <div className="App">
      <p>I am the App</p>
      <Family/>
    </div>
    </MyProvider>
  )
}

export default App;