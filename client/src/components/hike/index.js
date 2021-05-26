import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./style.css";

function HikeCard(props) {
    const linkObj = {
        pathname: `/hikeme/${props.id}`,
        hikeProps: {
            name: `${props.name}`,
            bigimg: `${props.bigimg}`,
            rating: `${props.rating}`,
            ratingRating: `${props.ratingRating}`,
            summary: `${props.summary}`,
            length: `${props.length}`,
            gain: `${props.gain}`,
            distance: `${props.distance}`,
            longitude: `${props.longitude}`,
            latitude: `${props.latitude}`,
            location: `${props.location}`
        }
    }
    let votes = "";
    
    if (props.ratingRating === 1){
        votes = "vote"
    } else {
        votes = "votes"
    }

    return (
        <div className="uk-width-1-1 hikeCard uk-container-expand">
            <hr/>
            <h2 className="hikeName uk-text-center"><Link className="hikeName" to={linkObj}>{props.name}</Link></h2>
            <h3 className="hikeLocation uk-text-center">{props.location}</h3>
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-1@xs" uk-grid="true">
                <div className="uk-first-column hikePicDiv">
                    {props.lilimg ? <Link to={linkObj}><img className="hikeImg" src={props.lilimg} alt={props.name} /></Link> : <Link to={linkObj}><img className="hikeImg" src="https://via.placeholder.com/300/1e6262/b4f1f1?text=Image+Not+Found" alt={props.name} /></Link>}
                </div>
                <div className="hikeInfo">
                    <p className="hikeRatingDifficulty"><i className="fas fa-heart"></i> Rating:&nbsp;  
                        <Rating
                            initialRating={props.rating}
                            readonly
                            emptySymbol={<i className="badStar fas fa-star"></i>}
                            fullSymbol={<i className="goodStar fas fa-star"></i>}
                        /> ({props.ratingRating} {votes})</p>
                    <p className="hikeDistance"><i className="fas fa-road"></i> Distance: {props.distance} mi.</p>
                    <p className="hikeLength"><i className="fas fa-sign"></i> Length: {props.length} mi.</p>
                    <p className="hikeGain"><i className="fas fa-mountain"></i> Gain: {props.gain} ft.</p>
                </div>
            </div>
        </div>
    )
}

export default HikeCard;