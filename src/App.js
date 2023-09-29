import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <h2>Functional Component</h2>
      <FunctionalComponent />
      <h2>Class Component</h2>
      <ClassComponent />
    </div>
  );
}

export default App;
