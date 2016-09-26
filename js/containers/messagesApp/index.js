import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageAction from 'js/actions/message';
import * as listAction from 'js/actions/indexList';
import * as pageAction from 'js/actions/pagination';
import {Header,DataLoad,Footer,TipMsgSignin} from 'js/components/common';
import {Message} from 'js/components/message';
import {Tool} from 'js/util/tool';
class MessageApp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    /**
     * 页面初始化渲染完成之后执行加载数据
     */
    componentDidMount() {
        const {actions} = this.props;
        var User = JSON.parse(Tool.localItem('User'));
        if(!User){

        }else {
            actions.getUserInfo(User.accesstoken).then((success)=> {
                if (success) {
                    //查询成功
                } else {
                    //失败，暂时没考虑
                }
            });
        }
        actions.clearIndexList();
        actions.setCurrPage(0);

    }

    /**
     * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
     * @param np
     */
    componentWillReceiveProps(np) {
    }

    /**
     * 在接收到新的 props 或者 state，将要渲染之前调用。
     * 该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    /**
     * 在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillUnmount() {
    }


    render() {
        var {data, loadState, loadFailed,msg} = this.props;
        var User = JSON.parse(Tool.localItem('User'));
        var main = null;
        if (!User) {
            main = <TipMsgSignin />
        } else if (!data) {
            main = <DataLoad loadingData={loadState} loadFailed={loadFailed} msg={msg}></DataLoad>
        } else {
            main = <Message list={data} />;
        }

        return (
            <div>
                <Header title="消息" />
                {main}
                <Footer index="2" />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.messages.messages,
        loadState: state.load.loadState,
        loadFailed: state.load.loadFailed,
        msg: state.load.msg
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({},messageAction,listAction,pageAction), dispatch)
});
module.exports =  connect(mapStateToProps, mapDispatchToProps)(MessageApp);
MessageApp.contextTypes = {
    router: React.PropTypes.object
}
