import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as topicAction from 'js/actions/topic';
import {DataLoad, Header} from 'js/components/common';
import {Article} from 'js/components/topic';
import {Tool} from 'js/util/tool';
class TopicApp extends Component {
    //定义私有状态，用于设置回复后重新加载，给滚动条定位
    state = {
        page: {
            scrollX: 0,
            scrollY: 0
        }
    };
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const id = this.props.routeParams.id;
        this.loadData(id);
    }

    /**
     *
     * @param id[topicId]
     * @param isReload[bool]是否是重新加载，如果重新加载，就要滚动到指定位置
     */
    loadData(id, isReload) {
        const {actions} = this.props;
        actions.getTopicDetail(id).then((success)=> {
            if (success) {
                if (isReload) {
                    //滚动到指定位置
                    window.scrollTo(this.state.page.scrollX, this.state.page.scrollY);
                }
                //查询成功
            } else {
                //失败，暂时没考虑
            }
        });
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

    /**
     * 点赞
     * @param id
     * @param index
     * @param loginname
     */
    clickZan(id, index, loginname) {
        var {topicDetail, actions} = this.props;
        var user = JSON.parse(Tool.localItem('User'));
        var accesstoken = user ? user.accesstoken : '';
        var uid = user ? user.id : '';
        if (!accesstoken) {
            return this.context.router.push("login"); //跳转到登录
        } else if (user.loginname === loginname) {
            return alert('你不能给自己点赞');
        }
        actions.setClickZan(id, accesstoken, index, uid).then((success)=> {
            if (success) {
                //查询成功
                //alert('点赞成功');
            } else {
                //失败，暂时没考虑
            }
        });

    }

    /**
     * 展示回复框
     * @param index
     */
    showReplyBox(index) {
        var {topicDetail, actions} = this.props;
        var user = JSON.parse(Tool.localItem('User'));
        var accesstoken = user ? user.accesstoken : '';
        if (!accesstoken) {
            return this.context.router.push("login"); //跳转到登录
        }
        --index;
        if (topicDetail.replies[index].display === 'block') {
            actions.setReplybox({
                index: index,
                display: 'none'
            });
            //this.props.state.data.replies[index].display = 'none';
        } else {
            //this.props.state.data.replies[index].display = 'block';
            actions.setReplybox({
                index: index,
                display: 'block'
            });
        }

    }

    /**
     * submit提交回复内容的方法  (id是主题ID)
     * data参数的结构{accesstoken id reply_id content}
     */
    submit(data) {
        const {dispatch, actions} = this.props;
        actions.submitReply(data).then((success)=> {
            if (success) {
                //回复成功，重新加载，先设置滚动条的位置，滚动条位置为私有属性
                this.setState({
                    page: {
                        scrollX:window.scrollX,
                        scrollY:window.scrollY
                    }
                });
                this.loadData(data.id, true);
            } else {
                //失败，暂时没考虑
            }
        });


    }

    render() {
        var {topicDetail, loadState,loadFailed,msg} = this.props;
        //从localStorage中取出User
        var user = JSON.parse(Tool.localItem('User'));
        var main = loadState || loadFailed ? <DataLoad loadingData={loadState} loadFailed={loadFailed} msg={msg}></DataLoad> :
            <Article {...topicDetail} User={user} clickZan={(id, index,loginname)=>this.clickZan(id, index,loginname)}
                                      showReplyBox={(index)=>this.showReplyBox(index)}
                                      submit={(data)=>this.submit(data)}/>;
        return (
            <div>
                <Header title="详情" leftIcon="fanhui"/>
                {main}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        topicDetail: state.topicDetail.topicDetail,
        loadState: state.load.loadState,
        loadFailed: state.load.loadFailed,
        msg: state.load.msg
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, topicAction), dispatch)
});
module.exports =  connect(mapStateToProps, mapDispatchToProps)(TopicApp);
TopicApp.contextTypes = {
    router: React.PropTypes.object
}
