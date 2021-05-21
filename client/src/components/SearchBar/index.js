import React, {useState} from 'react';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    return (
        <form onSubmit={console.log(yelpFetch(term, location))}>
            <div>
                <p>
                    <button>Search</button>
                </p>
                  <div className="search-term">
                    <input
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="Search for a hike!"
                    />
                    </div>
                
                <div className="search-location">
                    <input
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           value={location}
                           placeholder="Location"/>
                <div onClick={submit}>
                </div>
                </div>
            </div>
        </form>
    );
}

// import axios from "axios";
const axios = require('axios');
const YELP_API_KEY = ``

// export default {

const yelpFetch = async (term, location) => {
await axios
    .get(
        `https://api.yelp.com/v3/businesses/search?categories=hiking&term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    )
    .then(response => {
        console.log(response.data.businesses[0]);
    })
    .catch(err => {
        console.log(err);
    });
};

yelpFetch('trail', 'olympia');

export default SearchBar