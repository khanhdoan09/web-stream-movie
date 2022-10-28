import { SEARCH_BY_NAME } from "../constants/actionTypes";

const  initialState = [{
    text: 'init',
    data: 0
}];

export default function searchReducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY_NAME:
            return {text: 'init', data: 1};
        default:
            return state;
    }
}