import Axios from 'axios'

function requestFoodList() {
    return {
        type: "REQUEST_FOOD_LIST"
    }
}

function receiveFoodList(foodList) {
    return {
        type: "RECEIVE_FOOD_LIST",
        foodList
    }
}

export function selectFood(foodId) {
    return {
        type: "SELECT_FOOD",
        foodId
    }
}


export function fetchFoodList() {
    return function(dispatch) {
        // Before we do anything, we let the state know
        // that we're requesting the food list but that it hasn't loaded yet
        // This lets us do any load animation or disable important functionality
        dispatch(requestFoodList());
        // Axios is a just an easy way to make an API call
        // Remember how we set the proxy in package.json?
        // This prefills that so it communicates with the server
        return Axios.get(`/api/food`) // We used Axios last week!
            // Once Axios is done GETTING the request, we can pass the data to another
            // action creator and dispatch that
            .then(response => dispatch(receiveFoodList(response.data)),
                // A better option might be to emit an  action with type 'error' to let users
                // know that something went wrong.
                error => console.log('An error occurred.', error) // Note that errors should be handled in the
                // second argument, not via catch, when using
                // thunk
            );
    }
}