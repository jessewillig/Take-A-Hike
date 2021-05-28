import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar/index'
const axios = require('axios');

function Landing () {
    // const [term, setTerm] = useState(props.term || '');
    // const [trailDetails, setTrailDetails] = useState({
    //   name: '',
    //   city: '',
    //   state:'',
    //   coordinates:'',
    //   image_url:''
    // });
    return (
        <div>
            <SearchBar/>
        </div>

    )
}
export default Landing