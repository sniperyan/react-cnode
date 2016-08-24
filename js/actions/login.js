import {Tool} from 'js/util/tool';
import * as types from 'js/constants/ActionTypes';
import ajax from 'js/components/ajax'

/**
 * 用户登录
 * @param accesstoken
 * @returns {Function}
 */
export function login(accesstoken) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'post', //请求类型
            type:'json',//返回值类型
            timeout: 5000,//超时时间
            url: types.ACTION_PREFIX+'/api/v1/accesstoken/',
            needLoad:false,//不要加载动画
            data: {"accesstoken":accesstoken}, //发送给服务器的数据
            success: function (ret) {
                //登录成功，将用户信息存入localStorage，保存accesstoken
                ret.data.accesstoken = accesstoken;
                saveUser(ret.data);
                alert("登录成功");
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.statusText);
            } //请求失败后执行的方法
        });
    };
}
/**
 * 保存用户信息到localStorage
 * @param user
 */
function saveUser(user){
    Tool.localItem('User', JSON.stringify(user));
}






