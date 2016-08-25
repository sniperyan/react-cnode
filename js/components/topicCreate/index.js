import React, {Component} from 'react';
import './index.less';
/**
 * 新的主题
 */
export class NewTopic extends Component {
    render() {
        var { tab,title,content,tabInput,titleInput,contentInput} = this.props;
        return (
            <div className="topic-create">
                <div className="item">
                    <select name="tab" defaultValue={tab} onInput={tabInput}>
                        <option value="">请选择发表类型</option>
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">招聘</option>
                    </select>
                </div>
                <div className="item">
                    <input type="text" defaultValue={title} onInput={titleInput} placeholder="标题字数 10 字以上" />
                </div>
                <div className="item">
                    <textarea defaultValue={content} onInput={contentInput} placeholder="内容字数 30 字以上"></textarea>
                </div>
            </div>
        );
    }
}
NewTopic.propTypes = {
    tabInput: React.PropTypes.func,  //选择标题回调函数
    titleInput: React.PropTypes.func,  //输入标题回调函数
    contentInput: React.PropTypes.func  //输入回调函数
};