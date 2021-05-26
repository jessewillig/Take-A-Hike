import React, { useRef } from "react";
import "./style.css";

function CommentForm () {

    const ratingRef = useRef();
    const commentRef = useRef();

    const submitReview = (event) => {
        event.preventDefault()
        submitReview({
            rating: ratingRef.current.value,
            comment: commentRef.current.value
        }).then(response => {
            
        })
    }

    return (
        <div>
            <form>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Leave a Review!</legend>
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <legend className="uk-legend">Please rate difficulty of the hike.</legend>
                        <label><input class="uk-checkbox" type="checkbox" checked ref={ratingRef} /> 1</label>
                        <label><input class="uk-checkbox" type="checkbox" ref={ratingRef} /> 2</label>
                        <label><input class="uk-checkbox" type="checkbox" ref={ratingRef} checked /> 3</label>
                        <label><input class="uk-checkbox" type="checkbox" ref={ratingRef} /> 4</label>
                        <label><input class="uk-checkbox" type="checkbox" ref={ratingRef} checked /> 5</label>
                    </div>
                    <div className="uk-margin">
                        <textarea className="uk-textarea" rows="5" placeholder="Textarea" ref={commentRef}></textarea>
                    </div>
                    <div className="uk-margin">
                        <button className="uk-button uk-button-primary" type="submit" onClick={submitReview}>Submit</button>
                    </div>
            </fieldset>
            </form>
        </div>
    );
}

export default CommentForm;