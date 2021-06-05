import React, { useRef } from "react";
import { postComment } from "../../utils/API";
import "./style.css";

function CommentForm() {

    const ratingRef = useRef();
    const commentRef = useRef();

    const submitReview = (event) => {
        event.preventDefault()
        postComment({
            text: commentRef.current.value,
            rating: ratingRef.current.value
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <form>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Leave a Review!</legend>
                    <div className="uk-margin">
                        <textarea className="uk-textarea" rows="1" placeholder="Rate the Hike (1-5)." ref={ratingRef}></textarea>
                    </div>
                    <div className="uk-margin">
                        <textarea className="uk-textarea" rows="5" placeholder="What did you think?" ref={commentRef}></textarea>
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