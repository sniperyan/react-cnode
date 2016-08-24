import React, {Component} from 'react';
import {ListItem} from  './listItem';
import './index.less';
/**
 * 循环列表
 */
export class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <ul className="index-list">
                {
                    list.map((item, index) => {
                        return <ListItem key={item.id} {...item}/>
                    })
                }
            </ul>
        );
    }
}
List.propTypes = {
    list: React.PropTypes.array.isRequired  //首页主题集合
};
