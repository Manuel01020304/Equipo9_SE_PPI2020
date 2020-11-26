import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main_Page from "../Pages/Main_Page";
import Sign_In from "../Pages/Sign_In";
import Login from "../Pages/Login";
import Home_Page from "../Pages/Home_Page";
import Plans from "../Pages/Plans";
import Alarm from "../Pages/Alarm";
import Information from "../Pages/Information";
import Profile from "../Pages/Profile";
import Exercise1 from "../Pages/Exercise1";
import Exercise2 from "../Pages/Exercise2";
import Exercise3 from "../Pages/Exercise3";
import NotFound from "../Pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main_Page} />
          <Route exact path="/sign_in" component={Sign_In} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home_page" component={Home_Page} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/alarm" component={Alarm} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/exercise1" component={Exercise1} />
          <Route exact path="/exercise2" component={Exercise2} />
          <Route exact path="/exercise3" component={Exercise3} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
