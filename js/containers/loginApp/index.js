import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from 'js/actions/login';
import {Header} from 'js/components/common';
import {Login} from 'js/components/login';
import {Tool} from 'js/util/tool';
class LoginApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
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

    handleLogin(accesstoken) {
        const {actions} = this.props;
        this.setState({ button: '登录中...' });
        actions.login(accesstoken).then((success)=> {
            if (success) {
                //登录成功
                this.context.router.push('/user/' + JSON.parse(Tool.localItem('User')).loginname);
            } else {
                //失败，按钮恢复为登录
                this.setState({ button: '登录' });
            }
        });
    }

    //定义私有状态，按钮名称
    state = {
        button: '登录'
    }
    render() {
        return (
            <div>
                <Header title="登录" leftIcon="fanhui"/>
                <Login btnName={this.state.button} loginClick={(accesstoken)=>this.handleLogin(accesstoken)}></Login>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, loginAction), dispatch)
});
module.exports =  connect(mapStateToProps, mapDispatchToProps)(LoginApp);
LoginApp.contextTypes = {
    router: React.PropTypes.object
}
