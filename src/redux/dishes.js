import * as actionTypes from './actionTypes';

const dishes = (state = { 
    isLoading: true,
    errMess: null,
    dishes:[]
}, action) => {
    switch (action.type) {
        case actionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case actionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case actionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export default dishes;