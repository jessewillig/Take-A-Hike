import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HikeProvider } from "./utils/GlobalState"
import Header from "./components/Jumbotron"
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Saved from './pages/Profile/Profile'
const axios = require('axios');

function App() {
    document.title = "Take A Hike"
    const [location, setLocation] = useState('');
    const [trailResults, setTrailResults] = useState('Search for a trail!')
    function handleSubmit(e) {
        yelpFetch (location)
        e.preventDefault();
    }
    const yelpFetch = async (location) => {
        await axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hiking&term=hiking&location=${location}`,
            {
                headers: {
                Authorization: `Bearer Mw30ITWflSolse_YhQacZ7frFs0bKAwh-wteoRdVU4o3S9bfSkLyRsUsCToHzGSzZEvalTsvVasyid3MUq_HdOf3RGI-GUcamb557Pe7CGC5CsDVlmESpAApUgmiYHYx`,
                },
            }
            )
            .then(response => {  
                setTrailResults(
                response.data.businesses.slice(0,10).map(business => ({
                    name: business.name.replace(/['"]+/g, ''),
                    city: business.location.city.replace(/['"]+/g, ''),
                    state: business.location.state.replace(/['"]+/g, ''),
                    coordinates: business.coordinates,
                    image_url: business.image_url
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
                    <Route exact path='/saved' component={Saved} />
                </Switch>
                <Footer />
            </Router>
        </HikeProvider>

    )
}
export default App