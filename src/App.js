import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/UI/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import User from "./components/pages/User";

const App = () => {

  const [users, setUsers] = useState([]);

  const updateUsers = users => {
    setUsers(users);
  }

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/user/:login" exact>
          <User />
        </Route>
        <Route path="/" exact>
          <Home updateUsers={updateUsers} users={users} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
