import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Jumbotron"
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './pages/Login/Login'

function App() {
    document.title = "Take A Hike"

    return (
        <Router>
            <Nav />
            <Header />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/login' component={Login} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default App