import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_USERINFO:
            return Object.assign({}, state, {
                userInfo: action.data
            });
        default:
            return state;
    }
}