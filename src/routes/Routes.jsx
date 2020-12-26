import React from 'react'
import { Switch, Route } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import User from "../components/User"
import Admin from "../components/Admin"

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <Dashboard {...props}></Dashboard>} ></Route>
      <Route path="/user" render={() => <User></User>} />
      <Route path="/admin" render={() => <Admin></Admin>} />
    </Switch>
  )
}
