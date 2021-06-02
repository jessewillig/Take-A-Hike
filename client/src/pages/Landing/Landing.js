import { PromiseProvider } from 'mongoose';
import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar'
import SearchResults from '../../components/SearchResults'
const axios = require('axios');
//import CommentForm from "../../components/CommentForm"


function Landing (props) {
    return (
    <div>
        <SearchBar
            setLocation={props.setLocation}
            handleSubmit={props.handleSubmit}
            location={props.location}
            trailResults={props.trailResults}
        />
        {props.trailResults.length ? (
            <SearchResults
            trailResults={props.trailResults}
        />
        ): (
            <h1>Search for a hike to begin</h1>
        )}
        
        </div>

    )
}
export default Landing