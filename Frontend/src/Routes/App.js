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
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
