import React from "react";
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import {createNewFood} from "../actions/createFoodActions";

class FoodCreator extends React.Component {

    render() {
        const request = {};

        if (this.props.requestStatus === "SUCCESS") {
            return <Redirect to={'/food'} />
        }

        return (
            <div>
                <div>
                    <label>Food Name</label>
                    <div>
                        <input onChange={(e) => request.name = e.target.value} name="name" component="input" type="text"
                               placeholder="Food name here..."/>
                    </div>
                    <label>Color</label>
                    <div>
                        <input onChange={(e) => request.color = e.target.value} name="color" component="input" type="text" placeholder="Food color here..."/>
                    </div>
                    <label>Shape</label>
                    <div>
                        <input onChange={(e) => request.shape = e.target.value} name="shape" component="input" type="text" placeholder="Food shape here..."/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={this.props.inFlight} onClick={() => this.props.handleClick(request)}>Submit</button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        handleClick: (request) => dispatch(createNewFood(request))
    }
};

function mapStateToProps(state, props) {
    return {
        requestStatus: state.createFood.requestStatus,
        inFlight: state.createFood.inFlight,
    }
};

export default FoodCreator = connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodCreator);