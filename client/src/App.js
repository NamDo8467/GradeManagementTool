import React from "react";
import Login from "./components/Login/Login"
import { Switch, Route } from "react-router-dom";
import Teacher from "./components/Teacher/Teacher";
import Home from "./components/Home/Home"
import Signup from "./components/Signup/Signup";
const App = () => {

  return (
    <>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        /*Protected Route*/
        <Route path="/user" component={Teacher} />
        
      </Switch>
    </>
  );
};
export default App;
