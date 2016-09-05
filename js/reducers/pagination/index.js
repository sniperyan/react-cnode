import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENTPAGE:
            return Object.assign({}, state, {
                pagination: {
                    ...state.pagination,
                    page: action.data
                }
            });
        case types.SET_SCROLL_POSITION:
            return Object.assign({}, state, {
                pagination: {
                    ...state.pagination,
                    scrollX:action.data.scrollX,
                    scrollY:action.data.scrollY
                }
            });
        default:
            return state;
    }
}