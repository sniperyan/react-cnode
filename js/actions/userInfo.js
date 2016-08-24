import * as types from 'js/constants/ActionTypes';
import ajax from 'js/components/ajax'

/**
 * 获取用户信息
 * @param loginname 用户名
 * @returns {Function}
 */
export function getUserInfo(loginname) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'get', //请求类型
            type:'json',//返回值类型
            timeout: 5000,//超时时间
            url: types.ACTION_PREFIX+'/api/v1/user/' + loginname,
            success: function (ret) {
                dispatch(setUserInfo(ret.data.data));
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.statusText);
            } //请求失败后执行的方法
        });
    };
}
export function setUserInfo(data) {
    return {
        type: types.SET_USERINFO,
        data
    };
}
