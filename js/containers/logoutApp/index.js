import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header} from 'js/components/common';
import {LoginOut} from 'js/components/loginout';
import {Tool} from 'js/util/tool';
class LoginOutApp extends Component {
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

    handleLoginout() {
        Tool.removeLocalItem('User');
        this.context.router.push('/');
    }
    render() {
        return (
            <div>
                <Header title="退出登录" leftIcon="fanhui"/>
                <LoginOut loginOut={()=>this.handleLoginout()}></LoginOut>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginOutApp);
LoginOutApp.contextTypes = {
    router: React.PropTypes.object
}
