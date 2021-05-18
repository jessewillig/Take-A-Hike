import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          placeholder="Type in a search term to begin"
          id="term"
        />
  );
}

export default SearchBar;
