import React, {useState} from 'react';
import "./style.css";
const axios = require('axios');
const YELP_API_KEY = `Mw30ITWflSolse_YhQacZ7frFs0bKAwh-wteoRdVU4o3S9bfSkLyRsUsCToHzGSzZEvalTsvVasyid3MUq_HdOf3RGI-GUcamb557Pe7CGC5CsDVlmESpAApUgmiYHYx`

export function SearchBar(props) {
    // const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    const [trailDetails, setTrailDetails] = useState({
      name: '',
      city: '',
      state:'',
      coordinates:'',
      image_url:''
    });


    const yelpFetch = async (location) => {
      await axios
          .get(
              `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hiking&term=hiking&location=${location}`,
            {
              headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
              },
            }
          )
          .then(response => {
              setTrailDetails({
                name: response.data.businesses[0].name,
                city: response.data.businesses[0].location.city,
                state: response.data.businesses[0].location.state,
                coordinates: response.data.businesses[0].coordinates,
                image_url: response.data.businesses[0].image_url
              });
          
          })
          .catch(err => {
              console.log(err);
          });
      };
      

    function submit(e) {
      yelpFetch (location)
      e.preventDefault();
    }

    return (
      <div className="wrap">
        <div className="uk-flex">
        <div className="uk-card uk-card-default uk-card-hover uk-width-1-5@m uk-margin-left">
          <h3 className="uk-card-title">Search For Hike.</h3>
        <form className="uk-search uk-search-default" onSubmit={submit}>
            <div className="search-bar-component">
                <div className="search-location">
                    <input
                           className="uk-search-input"
                           onChange={(e) => setLocation(e.target.value)}
                           type="search"
                           value={location}
                           placeholder="Location"/>
                </div>
                <p>
                    <button className="uk-button uk-button-primary uk-button-small">Search</button>
                </p>
            </div>
        </form>
        </div>
        <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
        <div className="search-result">
          <h2>
            Trail Name: {JSON.stringify(trailDetails.name).replace(/['"]+/g, '')}
          </h2>
          <p>Location: {JSON.stringify([trailDetails.city, trailDetails.state]).replace(/['"]+/g, '')}</p>
        </div>
        </div>
        </div>
      </div>
    );
}

export default SearchBar