import React, {Component} from 'react';
/**
 * 回复框
 *
 * @class ReplyBox
 * @extends {Component}
 */
export class ReplyBox extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(e){
        /*const {submit} = this.props;
        var accesstoken = this.refs.accesstoken.value;
        submit(accesstoken);*/
        //data  {accesstoken id reply_id}
        const {data,loginname,submit} = this.props;
        //this.state = { btnname: '提交中...' }
        //var data = this.props.data;
        if (data.reply_id) {
            data.content = `[@${loginname}](/user/${loginname}) ${this.refs.content.value}`;
        } else {
            data.content = this.refs.content.value;
        }
        if (data.content == '') {
            return alert('回复内容不能为空！');
        }
        //打标，暂时不打
        //data.content += '<br><br>来自疯狂的<a href="#" target="_blank">react-cnode</a>';
        /*Tool.post(`/api/v1//topic/${data.id}/replies`, data, (res) => {
            this.setState({ btnname: '回复成功，刷新页面中..' });
            this.refs.content.value = '';
            Tool.get(`/api/v1//topic/${data.id}`, {}, (res) => {
                this.props.reLoadData(res.data); //刷新页面
                this.setState({ btnname: '回复' });
            }, () => {
                this.state = { btnname: '刷新失败，请手动刷新试试' }
            });

        }, (res) => {
            this.setState({ btnname: '回复失败' });
        });*/
        /**
         * submit提交回复内容的方法
         * data参数的结构{accesstoken id reply_id content}
         */
        submit(data);
    }
    render() {
        var { display,placeholder} = this.props;
        return (
            <div className="reply-box" style={{ display: display }}>
                <div className="text"><textarea ref="content" placeholder={placeholder}></textarea></div>
                <div className="reply-btn">
                    <button className="btn" onClick={(e)=>this.handleClick(e)}>回复</button>
                </div>
            </div>
        );
    }
}
ReplyBox.propTypes = {
    display: React.PropTypes.string,  //css display
    placeholder: React.PropTypes.string,  //placeholder
    loginname: React.PropTypes.string,  //登录用户名
    data: React.PropTypes.object,  //{accesstoken id reply_id} id为当前topic的id
    submit: React.PropTypes.func  //提交回复的方法

};
/*ReplyBox.defaultProps = {
    display: 'block',
    placeholder: '回复支持Markdown语法,请注意标记代码'
};*/
ReplyBox.contextTypes = {
    router: React.PropTypes.object
}