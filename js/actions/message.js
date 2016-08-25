import * as types from 'js/constants/ActionTypes';
import ajax from 'js/components/ajax'

/**
 * 设置消息集合
 * @param accesstoken
 * @returns {Function}
 */
export function getUserInfo(accesstoken) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'get', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/messages?accesstoken=' + accesstoken,
            success: function (ret) {
                //把已读消息和未读消息合并
                let messageList = ret.data.data.has_read_messages.concat(ret.data.data.hasnot_read_messages);
                dispatch(setUserInfo(messageList));
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}
export function setUserInfo(data) {
    return {
        type: types.SET_MESSAGE,
        data
    };
}
