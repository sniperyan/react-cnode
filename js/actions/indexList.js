import * as types from 'js/constants/ActionTypes';
import ajax from 'js/components/ajax'

/**
 * 获取list数据
 * @param page 页码
 * @param limit 每页显示多少条数据
 * @param tab   tab页参数
 * @returns {Function}
 */
export function getIndexList(page, limit,tab) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'get', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/topics?tab='+tab+'&page='+page+'&limit='+limit, //请求地址
            data: null, //发送给服务器的数据
            success: function (ret) {
                dispatch(setIndexList(ret.data.data));
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}
export function setIndexList(data) {
    return {
        type: types.SET_INDEXLIST,
        data
    };
}
//清空indexList
export function clearIndexList() {
    return {
        type: types.CLEAR_INDEXLIST
    };
}

export function testFunc() {
    return {
        type: types.TEST_ACTION
    };
}




