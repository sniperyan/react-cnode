import * as types from 'js/constants/ActionTypes';
export function setload(data) {
    return {
        type: types.SET_DATALOAD,
        data
    };
}
export function setloadFail(data) {
    return {
        type: types.SET_LOADFAIL,
        data
    };
}
export function setloadMsg(data) {
    return {
        type: types.SET_LOADMSG,
        data
    };
}