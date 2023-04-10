import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

const App = () => {
   const [users, setUsers] = useState([]);

   const updateUsers = (users) => {
      setUsers(users);
   };

   return (
      <div>
         <Navbar />
         <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:login" component={User} />
            <Route path="/" render={(props) => <Home updateUsers={updateUsers} users={users} {...props} />} />
         </Switch>
      </div>
   );
};

export default App;
