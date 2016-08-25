import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as topicAction from 'js/actions/topic';
import {Header, Footer, TipMsgSignin} from 'js/components/common';
import {NewTopic} from 'js/components/topicCreate';
import {Tool} from 'js/util/tool';
class TopicCreateApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    /**
     * 页面初始化渲染完成之后执行加载数据
     */
    componentDidMount() {
    }
    state = {
        title: '',
        tab: '',
        content: '',
        accesstoken:''
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
        return false;
    }

    /**
     * 在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillUnmount() {
    }

    /**
     * 监听用户选择发表类型
     *
     * @param {Object} e 事件出发的元素
     */
    tabInput = (e) => {
        this.state.tab = e.target.value;
    }

    /**
     * 监听用户输入标题
     *
     * @param {Object} e //事件触发的元素
     */
    titleInput = (e) => {
        this.state.title = e.target.value;
    }

    /**
     * 监听用户输入内容
     *
     * @param {Object} e //事件触发的元素
     */
    contentInput = (e) => {
        this.state.content = e.target.value;
    }
    rightClick = () =>{
        const {actions}=this.props;
        if (!this.state.tab) {
            return alert('请选择发表类型');
        } else if (this.state.title.length < 10) {
            return alert('标题字数10字以上');
        } else if (this.state.content.length < 30) {
            return alert('内容字数30字以上');
        }
        var User = JSON.parse(Tool.localItem('User'));
        this.state.accesstoken = User.accesstoken;
        actions.createTopic(this.state).then((ret)=>{
            if(ret){
                //成功
                this.context.router.push('/topic/' + ret.data.topic_id);
            }else {
                //失败
            }
        })

    }

    render() {
        //var {data, params, loadState, loadFailed, msg} = this.props;
        var User = JSON.parse(Tool.localItem('User'));
        var headerSet = {};
        var main = null;
        if (!User) {
            main = <TipMsgSignin />
        } else {
            main = <NewTopic {...this.state} tabInput={this.tabInput} titleInput={this.titleInput}
                                             contentInput={this.contentInput}/>
            headerSet = {
                rightIcon: 'fabu',
                rightClick: this.rightClick
            };
        }
        return (
            <div>
                <Header title="发表主题" {...headerSet} />
                {main}
                <Footer index="1"/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {

    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({},topicAction ), dispatch),
    dispatch: dispatch
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(TopicCreateApp);
TopicCreateApp.contextTypes = {
    router: React.PropTypes.object
}
