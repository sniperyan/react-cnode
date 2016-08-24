import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_DATALOAD:
            return Object.assign({}, state, {
                loadState: action.data,
                loadFailed: state.loadFailed,
                msg: state.msg
            });
        case types.SET_LOADFAIL:
            return Object.assign({}, state, {
                loadState: state.loadState,
                loadFailed: action.data,
                msg: state.msg
            });
        case types.SET_LOADMSG:
            return Object.assign({}, state, {
                loadState: state.loadState,
                loadFailed: state.loadFailed,
                msg: action.data
            });
        default:
            return state;
    }
}