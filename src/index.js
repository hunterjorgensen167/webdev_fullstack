import React from 'react';
import ReactDOM from 'react-dom';
import FoodListViewer from './containers/foodList'
import FoodCreator from './containers/foodCreator'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducers";
import thunkMiddleware from 'redux-thunk';
import {
    BrowserRouter, Switch,
    Route, Redirect
} from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/food/create" component={FoodCreator}/>
                <Route path="/food" component={FoodListViewer} />
                <Redirect exact from="/" to="food" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);