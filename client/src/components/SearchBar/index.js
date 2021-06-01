import React, {useState} from 'react';
import "./style.css";
const axios = require('axios');

export function SearchBar(props) {
  const [location, setLocation] = useState('');
  const [trailResults, setTrailResults] = useState('Search for a trail!')
  
  function handleSubmit(e) {
    e.preventDefault();
    yelpFetch (location);
  }
  function handleChange(e) {
      setLocation(e.target.value)
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
            console.log(response.data.businesses[0]);
            setTrailResults(
              response.data.businesses.map(business => ({
                name: business.name.replace(/['"]+/g, ''),
                city: business.location.city.replace(/['"]+/g, ''),
                state: business.location.state.replace(/['"]+/g, ''),
                coordinates: business.coordinates,
                image_url: business.image_url
              }))
            )
            console.log(trailResults)
          })
        .catch(err => {
            console.log(err);
        });
    };
    return (
      <div className="wrap">
        <div className="uk-flex">
        <div className="uk-card uk-card-default uk-card-hover uk-width-1-5@m uk-margin-left">
          <h3 className="uk-card-title">Search For Hike</h3>
        <form className="uk-search uk-search-default" onSubmit={handleSubmit}>
            <div className="search-bar-component">
                <div className="search-location">
                    <input
                           className="uk-search-input"
                           onChange={handleChange}
                           type="search"
                           value={location}
                           placeholder="Location"/>
                </div>
                <p>
                  <button className="uk-button uk-button-primary uk-button-small">
                    Search
                  </button>
                </p>
              </div>
            </form>
          </div>
          <div className="uk-card uk-card-default uk-card-hover uk-width-1-4@m uk-margin-left">
            <div className="search-result">
              <h2>
                Trail Name: {trailResults[0].name}
              </h2>
              <p>
                Location: {trailResults[0].city + `, ` + trailResults[0].state}
              </p>
              <img src={trailResults[0].image_url} height="150px" width="150px" alt="Yelp" uk-img></img>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SearchBar