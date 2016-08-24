import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_INDEXLIST:
            return {
                indexList: [
                    ...state.indexList,
                    ...action.data
                ]
            }
        case types.CLEAR_INDEXLIST:
            return {
                indexList: []
            }
        default:
            return state;
    }
}