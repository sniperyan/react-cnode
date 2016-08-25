import React, {Component} from 'react';
import {Tool} from 'js/util/tool';
import {UserHeadImg} from 'js/components/common';
import {Link} from 'react-router';
import './index.less';

/**
 * 消息内容
 *
 * @class Content
 * @extends {Component}
 */
export class Message extends Component {
    render() {
        var {list} = this.props;
        return (
            <div className="msg-box">
                <ul className="list">
                    {
                        list.map((item, index) => {
                            var {type, author, topic, reply, has_read} = item;
                            var content = null;

                            if (type == 'at') {
                                content = <div>在话题<Link to={`/topic/${topic.id}`}>{topic.title}</Link>中 @了你</div>;
                            } else {
                                content = <div>回复你了的话题<Link to={`/topic/${topic.id}`}>{topic.title}</Link></div>
                            }
                            return (
                                <li key={index}>
                                    <Link className="user" to={`/user/${author.loginname}`}>
                                        <UserHeadImg url={author.avatar_url}/>
                                    </Link>
                                    <div className="message-content">
                                        <div className="name">{author.loginname}
                                            <time>{Tool.formatDate(reply.create_at) }</time>
                                        </div>
                                        <div>
                                            <div>
                                                <div className={`dian-${has_read}`}></div>
                                            </div>
                                            {content}
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
Message.propTypes = {
    list: React.PropTypes.array.isRequired  //消息集合
};