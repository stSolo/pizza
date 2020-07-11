import * as actionTypes from './actionTypes';

const comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case actionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case actionTypes.ADD_COMMENT:
        var comment = action.payload;
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};


export default comments;