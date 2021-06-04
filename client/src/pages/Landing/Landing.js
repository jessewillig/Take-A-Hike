import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Header from "../../components/Jumbotron";

function Landing(props) {
    return (
        <div>
            <Header />
            <SearchBar
                setLocation={props.setLocation}
                handleSubmit={props.handleSubmit}
                location={props.location}
                trailResults={props.trailResults}
            />
            <SearchResults
                trailResults={props.trailResults}
            />
        </div>

    )
}
export default Landing