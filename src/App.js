import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>App Component</h1>
    </div>
  );
};

export default App;