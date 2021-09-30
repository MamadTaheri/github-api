import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/UI/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;