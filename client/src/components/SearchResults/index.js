import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.name}</h2>
      </li>
    </ul>
  );
}

export default SearchResults