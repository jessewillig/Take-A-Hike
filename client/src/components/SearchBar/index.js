import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
        <div className="search-bar">
          <h1 className="search-title">Take A Hike</h1>
          <input
            className="search-box"
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            placeholder="Type in a search term to begin"
            id="term"
          />
          <a href="#" className="search-bar-button">Login</a>
        </div>
  );
}

export default SearchBar;
