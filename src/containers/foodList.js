import React from "react";
import {connect} from 'react-redux';
import {fetchFoodList} from '../actions/foodActions'

class FoodListViewer extends React.Component {

    // componentDidMount executes AFTER the constructor
    // but before the component renders for the first time
    // and it is only called once in the lifespan of the object
    // so API calls are often made here
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        // Some simple loading code.  If we were working with a button
        // or other logic, we might want to disable it
        if (this.props.loading) {
            return <h3>Loading...</h3>
        }

        return (<div>
            <h1>These are my foods!</h1>
            <div>{this._renderFoodList()}</div>
        </div>);
    }

    _renderFoodList() {
        if (!this.props.foodList || this.props.foodList.length === 0) {
            return null;
        }

        const foodRows = this.props.foodList.map(food => (
            <tr key={food.id}><td>{food.name}</td><td>{food.color}</td><td>{food.shape}</td></tr>));
        return (<table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Shape</th>
            </tr>
            </thead>
            <tbody>
            {foodRows}
            </tbody>
        </table>)

    }
}


function mapDispatchToProps(dispatch, props) {
    return {
        onMount: () => {
            // thunk middleware simplifies a lot of the logic
            // but the idea is to treat thunk action creators
            // like normal action creators (thanks to the help
            // of the thunk middleware)
            dispatch(fetchFoodList())
        }
    }
};


// Accept the state and parse out whatever data we need
function mapStateToProps(state, props) {
    return {
        foodList: state.foods.list,
        loading: state.foods.inFlight,
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodListViewer)