import Axios from 'axios'

function requestNewFood() {
    return {
        type: "REQUEST_NEW_FOOD"
    }
}

function receiveNewFoodSuccess(foodId) {
    return {
        type: "RESPONSE_NEW_FOOD_SUCCESS",
        foodId
    }
}

function receiveNewFoodError() {
    return {
        type: "RESPONSE_NEW_FOOD_ERROR"
    }
}

export function createNewFood(newFood) {
    return function(dispatch) {
        dispatch(requestNewFood());
        return Axios.post(`/api/food`, newFood)
            .then(
                response => dispatch(receiveNewFoodSuccess(response.data)),
                receiveNewFoodError
            );
    }
}