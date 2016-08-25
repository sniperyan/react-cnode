import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
let store = configureStore();
let rootElement = document.getElementById('app');
import 'normalize.css'; //重置浏览器默认样式
import 'style/common.less'; //加载公共样式
import 'style/animate.less'; //加载公共动画
import '../Iconfont/iconfont.css'; //字体图标
render(
    <Provider store={store}>
        {routes}
    </Provider>,
    rootElement
);