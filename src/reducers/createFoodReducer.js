import {combineReducers} from 'redux'


export function createFood(
    state = {
        requestStatus: "NONE",
        inFlight: false,
    },
    action
) {
    switch (action.type) {
        case "REQUEST_NEW_FOOD":
            return Object.assign({}, state, {
                requestStatus: "SENDING",
                inFlight: true,
            });
        case "RESPONSE_NEW_FOOD_ERROR":
            return Object.assign({}, state, {
                requestStatus: "ERROR",
                inFlight: false,
            });
        case "RESPONSE_NEW_FOOD_SUCCESS":
            return Object.assign({}, state, {
                requestStatus: "SUCCESS",
                inFlight: false,
            });
        default:
            return state
    }
}


export default createFood;