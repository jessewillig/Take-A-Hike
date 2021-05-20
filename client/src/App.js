import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing'

function App() {
    document.title="Take A Hike"

    return (
        <Router>
            <Switch>
                <Route path='/' component={Landing}/>
            </Switch>
        </Router>
    )
}
export default App