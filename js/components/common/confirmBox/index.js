import React, {Component} from 'react';
import './index.less';
/**
 * 带确定取消按钮提示框
 * 使用的时候传递属性，个人觉得show做成私有状态比较好，没必要塞到reducer里面去管理，那个页面需要
 * 弹框提示，就在组件里面添加弹框
 *
 * 或者页面多的时候，把弹框，加载动画等内容，放在一个顶层路由中，把这些状态再塞到reducer里做成storeState去统一管理
 * 默认不展示，需要展示的时候dispatch action去改变state的状态，使其展示
 */
export class ConfirmBox extends Component {
    //添加私有状态是为了让组件在点击确认或者取消的后消失
    state={
        display:'none'
    }
    handleConfirm(){
        this.setState({display:'none'})
        const {confirm} = this.props;
        confirm && confirm();
    }
    handelCancel(){
        this.setState({display:'none'})
        const {cancel} = this.props;
        cancel && cancel();
    }
    componentDidMount(){
        this.setState({display:this.props.show});
    }
    render() {
        const {text} = this.props;
        const {display} = this.state;
        return (
            <div className="tips tip-with-confirm-cancel" style={{display:display}}>
                <div className="tip">
                    <div className="text">{text}</div>
                    <div className="confirm" onClick={()=>this.handleConfirm()}>确认</div>
                    <div className="cancel" onClick={()=>this.handelCancel()}>取消</div>
                </div>
            </div>
        );
    }
}
ConfirmBox.propTypes = {
    show: React.PropTypes.string,  //展示状态
    confirm: React.PropTypes.func,  //确认事件回调函数
    cancel: React.PropTypes.func,  //取消事件回调函数
    text: React.PropTypes.string  //提示语
};
//默认不展示
ConfirmBox.defaultProps = {
    show: 'none'
};