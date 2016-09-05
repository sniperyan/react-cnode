import * as loadAction from 'js/actions/dataLoad';
import axios from 'axios'
/**
 * 封装axios
 * @param dispatch 父组件action传递的dispatch
 * @param mySetting 配置参数
 * @returns {Promise.<T>}
 */
export default function (dispatch, mySetting) {

    var setting = {
        method: 'get', //请求类型
        type: 'json',//返回值类型
        timeout: 5000,//超时时间
        url: '', //请求地址
        needLoad: true,//是否需要加载动画，默认为true
        data: null, //发送给服务器的数据
        success: null, //请求成功后执行的方法
        error: null //请求失败后执行的方法
    };
    /**
     * 覆盖默认设置
     */
    for (let key in mySetting) {
        setting[key] = mySetting[key];
    }
    //设置加载状态，隐藏错误信息
    dispatch(loadAction.setloadFail(false));
    setting.needLoad && dispatch(loadAction.setload(true));
    return (function (dispatch, setting) {
        return axios({
            method: setting.method,
            responseType: setting.type,
            timeout: setting.timeout,
            data: setting.data,
            url: setting.url
        });
    })(dispatch, setting).then((ret) => {
        dispatch(loadAction.setload(false));
        if (ret.status === 200) {
            if (ret.data.success) {
                //加载成功，没有异常
                setting.success && setting.success(ret);
                return ret;
            } else {
                //请求成功，但是有异常
                dispatch(loadAction.setloadMsg("系统繁忙，请稍后再试！"));
                dispatch(loadAction.setloadFail(true));
                return false;
            }
        } else {
            //请求失败
            dispatch(loadAction.setloadMsg("请求失败，请稍后再试！"));
            dispatch(loadAction.setloadFail(true));
            return false;
        }
    }).catch(function (error) {
        //有异常，或者网络不通
        setting.error && setting.error(error);
        dispatch(loadAction.setloadMsg("网络异常，请稍后再试！"));
        dispatch(loadAction.setloadFail(true));
        dispatch(loadAction.setload(false));
        return false;
    });
}
