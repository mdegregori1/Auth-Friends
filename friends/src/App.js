import React from 'react';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <h1>Friends List</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path='/friendslist' component={FriendsList}/>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
