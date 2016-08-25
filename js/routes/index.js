import React, {Component} from 'react';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
/**
 * 按需加载路由配置
 * @param location
 * @param callback
 */
const topic = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/topicApp'))
    }, 'topic')
}
const indexList = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/listApp'))
    }, 'indexList')
}
const login = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/loginApp'))
    }, 'login')
}
const user = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/userApp'))
    }, 'user')
}
const topicCreate = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/topicCreateApp'))
    }, 'topicCreate')
}
const loginout = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/logoutApp'))
    }, 'loginout')
}
const message = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('../containers/messagesApp'))
    }, 'message')
}
/**
 * 路由根组件
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
/**
 * 因为有富文本，为了满足富文本链接到用户信息，用browserHistory，hash连接不过去
 * @type {XML}
 */
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots}>
            <IndexRoute getComponent={indexList} />
            <Route path="topic/create" getComponent={topicCreate} />
            <Route path="topic/:id" getComponent={topic} />
            <Route path="login" getComponent={login} />
            <Route path="loginout" getComponent={loginout} />
            <Route path="user/:loginname" getComponent={user} />
            <Route path="my/messages" getComponent={message} />
        </Route>

    </Router>
);

export default routes;