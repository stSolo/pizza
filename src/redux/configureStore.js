import {createStore, combineReducers, applyMiddleware} from 'redux';
import dishes from './dishes';
import comments from './comments';
import leaders from './leaders';
import promotions from './promotions';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishes,
            leaders: leaders,
            comments: comments,
            promotions: promotions,
        }),
        applyMiddleware(thunk)
    );

    return store;
}