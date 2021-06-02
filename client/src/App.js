import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HikeProvider } from "./utils/GlobalState"
import Header from "./components/Jumbotron"
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';

function App() {
    document.title = "Take A Hike"

    return (
        <HikeProvider>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                </Switch>
                <Footer />
            </Router>
        </HikeProvider>

    )
}
export default App