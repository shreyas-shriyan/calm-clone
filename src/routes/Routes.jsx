import React from 'react'
import { Switch, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import User from "../pages/User"
import Admin from "../pages/Admin"

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props}></LandingPage>} ></Route>
      <Route path="/user" render={() => <User></User>} />
      <Route path="/admin" render={() => <Admin></Admin>} />
    </Switch>
  )
}
