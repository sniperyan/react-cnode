import React, {Component} from 'react';
import {Link} from 'react-router';
import './nav.less';
/**
 * 头部导航条
 */
export class Nav extends Component {
    shouldComponentUpdate(np) {
        return this.props.tab !== np.tab; //tab和之前的不一致，组件才需要更新，否则不更新，提升性能
    }
    render() {
        const {tab} = this.props;
        let setCur = {};
        setCur[tab] = 'on';
        /*let tab = this.props.location.query.tab || 'all';
        传递的时候container这么写
        * */
        return (
            <nav className="index-nav">
                <ul>
                    <li className={setCur.all}>
                        <Link to="/">全部</Link>
                    </li>
                    <li className={setCur.good}>
                        <Link to="/?tab=good">精华</Link>
                    </li>
                    <li className={setCur.share}>
                        <Link to="/?tab=share">分享</Link>
                    </li>
                    <li className={setCur.ask}>
                        <Link to="/?tab=ask">问答</Link>
                    </li>
                    <li className={setCur.job}>
                        <Link to="/?tab=job">招聘</Link>
                    </li>
                </ul>
                <div className="height"></div>
            </nav>
        );
    }
}
Nav.propTypes = {
    tab: React.PropTypes.string.isRequired  //tab标题
};