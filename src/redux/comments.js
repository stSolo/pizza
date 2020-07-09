import { COMMENTS } from '../shared/comments';
import * as actionType from './actionTypes';

const comments = (state = COMMENTS, action) => {
    switch(action.type){
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return [...state, comment];
        default:
            return state
    }
}

export default comments;