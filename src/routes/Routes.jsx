import React from 'react'
import { Switch, Route } from "react-router-dom"
import Dashboard from "../components/Dashboard"

export default function Routes() {
  return (
    <Switch>
      <Route to="/" render={() => <Dashboard></Dashboard>} ></Route>
    </Switch>
  )
}
