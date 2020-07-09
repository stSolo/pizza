import {createStore, combineReducers} from 'redux';
import dishes from './dishes';
import comments from './comments';
import leaders from './leaders';
import promotions from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishes,
            leaders: leaders,
            comments: comments,
            promotions: promotions,
        })
    );

    return store;
}