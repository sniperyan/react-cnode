import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENTPAGE:
            return Object.assign({}, state, {
                pagination: {
                    page: action.data,
                    limit: state.pagination.limit,
                    scrollX:state.pagination.scrollX,
                    scrollY:state.pagination.scrollY
                }
            });
        case types.SET_SCROLL_POSITION:
            return Object.assign({}, state, {
                pagination: {
                    page: state.pagination.page,
                    limit: state.pagination.limit,
                    scrollX:action.data.scrollX,
                    scrollY:action.data.scrollY
                }
            });
        default:
            return state;
    }
}