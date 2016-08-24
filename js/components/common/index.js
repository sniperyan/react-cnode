/**
 * 通用小组件
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {Tool} from 'js/util/tool';
import './index.less';
/**
 * 加载动画 DataLoad
 */
export class DataLoad extends Component {
    render() {
        const {loadingData,loadFailed,msg} = this.props;
        return (
            <div>
                <div className={'data-load data-load-' + loadingData}>
                </div>
                <p className={"data-tips-"+loadFailed}>{msg}</p>
            </div>
        );
    }
}
DataLoad.propTypes = {
    loadingData: React.PropTypes.bool,  //是否在加载数据
    loadFailed: React.PropTypes.bool,  //是否加载失败
    msg: React.PropTypes.string  //加载失败提示语
};
/**
 * 生成主题类型小图标
 */
export class TabIcon extends Component {
    render() {
        var {tab, top, good} = this.props;
        if (top) {
            tab = 'top';
        } else if (good) {
            tab = 'good';
        }
        return (
            <i className={'iconfont icon-' + tab}></i>
        );
    }
}
TabIcon.propTypes = {
    tab: React.PropTypes.string,  //tab标题
    top: React.PropTypes.bool,  //是否置顶
    good: React.PropTypes.bool  //是否是精华
};
/**
 * 提示登录
 *
 * @export
 * @class TipMsgSignin
 * @extends {Component}
 */
export class TipMsgSignin extends Component {
    render() {
        return (
            <div className="tip-msg-signin">
                你还未登录，请先<Link to="/login">登录</Link>
            </div>
        );
    }
}
/**
 * 用户头像
 */
export class UserHeadImg extends Component {
    render() {
        const {url} = this.props;
        return (<div className="user-headimg" style={{ backgroundImage: 'url(' + url + ')' }}></div>)
    }
}
UserHeadImg.propTypes = {
    url: React.PropTypes.string  //用户头像地址
};

/**
 * 公共头部
 */
export class Header extends Component {
    render() {
        let {title, leftTo, leftIcon, rightTo, rightIcon, rightClick } = this.props;
        let left = null;

        if (leftTo && leftIcon) {
            left = (
                <Link to={leftTo}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </Link>
            );
        } else if (leftIcon === 'fanhui') { //返回上一页
            left = (
                <a onClick={this.context.router.goBack}>
                    <i className={'iconfont icon-' + leftIcon}></i>
                </a>
            );
        }

        let right = null;
        if (rightTo && rightIcon) {
            right = (
                <Link to={rightTo}>
                    <i className={'iconfont icon-' + rightIcon}></i>
                </Link>
            );
        } else if (rightClick && rightIcon) {
            right = (
                <div onClick={rightClick}>
                    <i className={'iconfont icon-' + rightIcon}></i>
                </div>
            );
        }
        return (
            <header className="common-header">
                <div className="icon">
                    {left}
                </div>
                <h2 className="title">{title}</h2>
                <div className="icon">
                    {right}
                </div>
            </header>
        );
    }
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}
/**
 * 底部菜单导航栏
 */
export class Footer extends Component {
    render() {
        var User = JSON.parse(Tool.localItem('User'));
        var myUrl = User && User.loginname ? '/user/' + User.loginname : '/login';
        var arr = [];
        arr[this.props.index] = 'on';
        return (
            <footer className="common-footer">
                <div className="zhanwei"></div>
                <ul className="menu">
                    <li className={arr[0]}>
                        <Link to="/">
                            <i className="iconfont icon-shouye"></i>首页
                        </Link>
                    </li>
                    <li className={arr[1]}>
                        <Link to="/topic/create">
                            <i className="iconfont icon-fabu"></i>发表
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to="/my/messages">
                            <i className="iconfont icon-xiaoxi"></i>消息
                        </Link>
                    </li>
                    <li className={arr[3]}>
                        <Link to={myUrl}>
                            <i className="iconfont icon-wode"></i>我的
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
    shouldComponentUpdate(np) {
        return this.props.index !== np.index; //防止组件不必要的更新
    }
}
Footer.propTypes = {
    index: React.PropTypes.string  //选中状态的序号
};
Footer.defaultProps = {
    index: 0
};
