import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Jumbotron"
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
    document.title = "Take A Hike"

    return (
        <Router>
            <Nav />
            <Header />
            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default App