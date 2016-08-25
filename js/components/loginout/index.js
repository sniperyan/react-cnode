import React, {Component} from 'react';
import './index.less';
/**
 * 登录部分
 */
export class LoginOut extends Component {
    constructor(props) {
        super(props);
    }
    loginOut(){
        const {loginOut} = this.props;
        loginOut();
    }
    render() {
        return (
            <div className="signin" data-flex="dir:top main:center cross:center">
                <div className="center">
                    <button className="btn btn-red" onClick={()=>this.loginOut()}>确认退出登录？</button>
                </div>
            </div>
        );
    }
}
LoginOut.propTypes = {
    loginOut: React.PropTypes.func.isRequired  //登出回调事件
};