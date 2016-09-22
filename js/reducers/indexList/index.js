import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_INDEXLIST:
            return Object.assign({}, state, {
                indexList: [
                    ...state.indexList,
                    ...action.data
                ]
            });
        case types.CLEAR_INDEXLIST:
            return Object.assign({}, state, {
                indexList: []
            });
        case types.TEST_ACTION:
            console.log("run in indexList reducer when action is TEST_ACTION for a single dispatched action");
            return state;
            
        default:
            return state;
    }
}