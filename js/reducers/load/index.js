import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_DATALOAD:
            return Object.assign({}, state, {
                ...state,
                loadState: action.data
            });
        case types.SET_LOADFAIL:
            return Object.assign({}, state, {
                ...state,
                loadFailed: action.data
            });
        case types.SET_LOADMSG:
            return Object.assign({}, state, {
                ...state,
                msg: action.data
            });
        default:
            return state;
    }
}