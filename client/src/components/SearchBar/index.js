import React, {useState} from 'react';
const axios = require('axios');
const YELP_API_KEY = `Mw30ITWflSolse_YhQacZ7frFs0bKAwh-wteoRdVU4o3S9bfSkLyRsUsCToHzGSzZEvalTsvVasyid3MUq_HdOf3RGI-GUcamb557Pe7CGC5CsDVlmESpAApUgmiYHYx`

export function SearchBar(props) {
    // const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    const [trailName, setTrailName] = useState(props.location || '');

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
              setTrailName(response.data.businesses[0].name);
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
        <form onSubmit={submit}>
            <div className="search-bar-component">
                <p>
                    <button>Search</button>
                </p>
                <div className="search-location">
                    <input
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           value={location}
                           placeholder="Location"/>
                </div>
            </div>
        </form>
        <div className="search-result">
          <h2>
            Trail Name: {JSON.stringify(trailName)}
          </h2>
        </div>
      </div>
    );
}

export default SearchBar