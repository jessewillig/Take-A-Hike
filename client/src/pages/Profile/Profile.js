import React, { Component } from "react";
import Header from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Hike from "../../components/Hike";
import Footer from "../../components/Footer";

class Saved extends Component {
    state = {
        savedHikes: []
    };


    componentDidMount = () => {
        this.getSavedHikes();
    };

    getSavedHikes = () => {
        API.getHikes()
            .then(res => {
                this.setState({
                    savedHikes: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    };

    deleteHike = id => {
        API.deleteHike(id)
            .then(res => {
                console.log("You must have hated this hike to delete it!", res)
                this.getSavedHikes();
            })
            .catch(err => {
                console.log(err);
            })
    };

    render () {
        return (
            <div>
                <Nav />
                <Header />
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
            </div>
        )
    }
}

export default Saved