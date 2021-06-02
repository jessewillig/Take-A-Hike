import React, { Component } from "react";
import Hike from "../../components/Hike";
import Footer from "../../components/Footer";
// import { Container } from "../../components"
import { List } from "../../components/List"
import Grid from "../../components/Grid"


class Saved extends Component {
    state = {
        savedHikes: []
    };

    render () {
        return (
            <div>
                <Grid />
                {this.state.savedHikes.length ? (
                    <List>
                        {this.state.savedHikes.map(hike => (
                            <Hike
                            key={hike.id}
                            title={hike.title}
                            image={hike.image}
                            rating={hike.rating}
                            location={hike.location}
                            difficulty={hike.difficulty}
                            review={hike.review}
                            Button={() => (
                                <button className="uk-button uk-button-danger"
                                    onClick={() => this.deleteHike(hike._id)}
                                >
                                    Delete
                                </button>
                             )}
                             />    
                        ))}

                    </List>
                
                ) : (
                    <div>
                        <hr />
                        <p>No Hikes have been saved..</p>
                    </div>
                )}
                   
                <Footer />
            </div>
        )
    }
}

export default Saved