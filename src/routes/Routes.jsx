import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import User from "../pages/User"
import Admin from "../pages/Admin"
import { useSelector } from 'react-redux';

export default function Routes(props) {
  const { username } = useSelector((state) => state.state);
  console.log("username", username);
  return (
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props}></LandingPage>} ></Route>
      <Route path="/user" render={() => username === "shreyas" ? <User></User> : <Redirect to="/" />} />
      <Route path="/admin" render={() => username === "admin" ? <Admin></Admin> : <Redirect to="/" />} />
    </Switch>
  )
}
