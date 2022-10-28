import * as type from '../constants/actionTypes';
export function searchByName(text) {
    return {
        type: type.SEARCH_BY_NAME,
        text
    };
}