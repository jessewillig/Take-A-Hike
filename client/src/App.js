import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Jumbotron"
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';

function App() {
    document.title="Take A Hike"

    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' component={Landing}/>
            </Switch>
            <Footer />
        </Router>
    )
}
export default App