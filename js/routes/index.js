import React, {Component} from 'react';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import {ListApp,TopicApp,LoginApp,UserApp} from 'js/containers';

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
            <IndexRoute component={ListApp} />
            <Route path="topic/:id" component={TopicApp} />
            <Route path="login" component={LoginApp} />
            <Route path="user/:loginname" component={UserApp} />
        </Route>

    </Router>
);

export default routes;