import React from "react"
import { Route, Switch } from 'react-router-dom';
import User from "./components/user";

import Login from "./components/login"

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Login} exact />

                <Route path="/user" component={User} exact />


            </Switch>
        </main>
    )
}



export default App;