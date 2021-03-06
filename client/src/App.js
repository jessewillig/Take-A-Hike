import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HikeProvider } from "./utils/GlobalState";
import Header from "./components/Jumbotron";
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
const axios = require('axios');

function App() {
    document.title = "Take A Hike"
    const [location, setLocation] = useState('');
    const [trailResults, setTrailResults] = useState([])
    function handleSubmit(e) {
        yelpFetch(location)
        e.preventDefault();
    }
    const yelpFetch = async (location) => {
        await axios
            .post("https://tranquil-scrubland-42356.herokuapp.com/api/yelp", { location: location })
            .then(response => {
                console.log(response.data);
                setTrailResults(response.data.map(data => ({
                    id: data.id,
                    name: data.name.replace(/['"]+/g, ''),
                    city: data.location.city.replace(/['"]+/g, ''),
                    state: data.location.state.replace(/['"]+/g, ''),
                    coordinates: data.coordinates,
                    image_url: data.image_url,
                    url: data.url
                }))
                )

            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <HikeProvider>
            <Router>
                <Nav />
                <Header />
                <Switch>
                    <Route
                        exact path='/'
                        render={() => (
                            <Landing
                                setLocation={setLocation}
                                handleSubmit={handleSubmit}
                                location={location}
                                trailResults={trailResults}
                            />
                        )}

                    />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                </Switch>
                <Footer />
            </Router>
        </HikeProvider>

    )
}
export default App;