import React, {useState} from 'react';
import "./style.css";
const axios = require('axios');

export function SearchBar(props) {
    return (
      <div className="wrap">
        <div className="uk-flex">
        <div className="uk-card uk-card-default uk-card-hover uk-width-expand uk-margin">
          <h3 className="uk-card-title">Search For Hike</h3>
        <form className="uk-search uk-search-default" onSubmit={props.handleSubmit}>
            <div className="search-bar-component">
                <div className="search-location">
                    <input
                           className="uk-search-input"
                           value={props.location}
                           onChange={e => props.setLocation(e.target.value)}
                           type="search"
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
        </div>
      </div>
    );
}

export default SearchBar