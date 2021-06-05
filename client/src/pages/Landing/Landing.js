import React from 'react';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

function Landing(props) {
    return (
        <div>
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