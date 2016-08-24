import React, {Component} from 'react';
import {Tool} from 'js/util/tool';
import {HomeList} from './homeList'
import {UserHeadImg} from 'js/components/common';
import './index.less';

/**
 * 个人主页
 *
 * @class Home
 * @extends {Component}
 */
export class Home extends Component {
    //定义私有状态，用于设置主题和回复的切换
    state = {
        tabIndex:0
    };
    changeTab(tabIndex){
        if(this.state.tabIndex===tabIndex){
            return;
        }else {
            this.setState({
                tabIndex:tabIndex
            });
        }

    }
    render() {
        var {avatar_url, loginname, score, recent_topics, recent_replies, create_at} = this.props;
        var {tabIndex} = this.state;
        var arrOn = [];
        var arrDisplay = [];
        arrOn[tabIndex] = 'on';
        arrDisplay[tabIndex] = 'block';
        return (
            <div className="user-index">
                <div className="headimg">
                    <UserHeadImg url={avatar_url} />
                    <div className="name">{loginname}</div>
                    <div className="score">积分：{score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册于：{Tool.formatDate(create_at) }</div>
                </div>
                <ul className="tab-nav">
                    <li onClick={ ()=>this.changeTab(0) } className={arrOn[0]}>主题</li>
                    <li onClick={ ()=>this.changeTab(1) } className={arrOn[1]}>回复</li>
                </ul>
                <HomeList list={recent_topics} display={arrDisplay[0]} />
                <HomeList list={recent_replies} display={arrDisplay[1]} />
            </div>
        );
    }
}
Home.propTypes = {
    avatar_url: React.PropTypes.string,  //头像地址
    loginname: React.PropTypes.string,  //头像地址用户名
    score: React.PropTypes.number,  //积分
    recent_topics: React.PropTypes.array,  //主题集合
    recent_replies: React.PropTypes.array,  //回复集合
    create_at: React.PropTypes.string  //创建时间
};