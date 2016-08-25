import * as types from 'js/constants/ActionTypes';
import ajax from 'js/components/ajax'
/**
 * 获取主体详情
 * @param id 主题ID
 * @returns {Function}
 */
export function getTopicDetail(id) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'get', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/topic/' + id,
            success: function (ret) {
                dispatch(setTopicDetail(ret.data.data));
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}
export function setTopicDetail(data) {
    return {
        type: types.SET_TOPIC,
        data
    };
}
/**
 * 设置replybox是否显示
 * @param data  {index,block|none}
 * @returns {{type: *, data: *}}
 */
export function setReplybox(data) {
    return {
        type: types.SET_REPLYBOX_DISPLAY,
        data
    };
}
/**
 * 点赞
 */
export function setClickZan(id,accesstoken,index,uid) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'post', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/reply/'+id+'/ups',
            needLoad:false,//不要加载动画
            data:{"accesstoken":accesstoken},
            success: function (ret) {
                dispatch(setZan({
                    action:ret.data.action,
                    uid:uid,
                    index:index
                }));
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}
export function setZan(data) {
    return {
        type: types.SET_ZAN,
        data
    };
}
/**
 * 回复
 */
export function submitReply(data) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'post', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/topic/'+data.id+'/replies',
            data:{"accesstoken":data.accesstoken,"reply_id ":data.reply_id ,"content":data.content},
            needLoad:false,//不要加载动画
            success: function (ret) {
                alert("回复成功");
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}
/**
 * 添加主题
 */
export function createTopic(data) {
    return function (dispatch, getState) {
        return ajax(dispatch,{
            method: 'post', //请求类型
            url: types.ACTION_PREFIX+'/api/v1/topics',
            data:data,
            needLoad:false,//不要加载动画
            success: function (ret) {
            }, //请求成功后执行的方法
            error: function (error) {
                alert(error.data.error_msg);
            } //请求失败后执行的方法
        });
    };
}





