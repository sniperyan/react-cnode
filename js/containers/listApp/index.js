import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listAction from 'js/actions/indexList';
import * as pageAction from 'js/actions/pagination';
import {Nav} from 'js/components/indexList/nav';
import {DataLoad,Footer} from 'js/components/common';
import {List} from 'js/components/indexList';
import {Tool} from 'js/util/tool';
class ListApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.initPath(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    /**
     * 初始化路径，用于tab改变的时候作比较刷新页面
     * @param props
     */
    initPath(props) {
        var {location} = props;
        var {pathname, search} = location;
        this.path = pathname + search;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        const {pagination} = this.props;
        if (pagination.page === 0) {
            //只有当前页为0的时候才触发加载数据
            this.loadData();
        }else {
            //是从别的页面返回到列表页的，需要恢复原来滚动条的位置
            window.scrollTo(pagination.scrollX,pagination.scrollY);
        }
    }
    /**
     * 处理页面滚动加载的方法
     */
    handleScroll() {
        if (Tool.reachBottom()) {
            //到达底部，分页加载数据
            const {loadState} = this.props;
            if (!loadState) {
                this.loadData();
            }
        }
    }
    /**
     * 用于加载数据，如果不传np参数，则默认加载当前页的props里的tab参数
     * 如果传递np，则加载np里的tab参数
     * @param [np] nextProps
     * @param [page]  指定加载某一页数据
     */
    loadData(np, page) {
        const {actions, dispatch, pagination} = this.props;
        let tab = '';
        if (!np) {
            tab = this.props.location.query.tab || 'all';
        } else {
            tab = np.location.query.tab || 'all';
        }
        //loadPage取第几页数据
        var loadPage;
        if (!page) {
            loadPage = pagination.page + 1;
        } else {
            loadPage = page;
        }
        actions.getIndexList(loadPage, pagination.limit, tab).then((success)=> {
            if (success) {
                //查询成功
                dispatch(actions.setCurrPage(loadPage));
            }
        });
    }

    /**
     * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
     * @param np
     */
    componentWillReceiveProps(np) {
        var {location} = np;
        var {pathname, search} = location;
        var path = pathname + search;
        if (this.path !== path) {
            //切换tab
            this.changeTab();
            //加载第一页数据
            this.loadData(np, 1);
        }
        this.initPath(np);
    }

    /**
     * 在接收到新的 props 或者 state，将要渲染之前调用。
     * 该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    /**
     * 切换tab执行的方法
     */
    changeTab() {
        const {actions, dispatch} = this.props;
        //清除列表
        dispatch(actions.clearIndexList());
    }

    /**
     * 在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillUnmount() {
        const {actions, dispatch} = this.props;
        //设置滚动条的位置，使返回的时候可以恢复
        dispatch(actions.setScrollPos({
            scrollX:window.scrollX,
            scrollY:window.scrollY
        }));
        window.removeEventListener('scroll', this.handleScroll);
    }
    // test reducer run how many times for a single dispatched action
    testFunc(){
        const {actions, dispatch} = this.props;
        dispatch(actions.testFunc());
    }

    render() {
        let tab = this.props.location.query.tab || 'all';
        const {list, loadState,loadFailed,msg} = this.props;
        return (
            <div>
                <Nav tab={tab}></Nav>
                <input type="button" value="testBtn" onClick={()=>this.testFunc()}/>
                <List list={list}></List>
                <DataLoad loadingData={loadState} loadFailed={loadFailed} msg={msg}></DataLoad>
                <Footer index="0" />
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.list.indexList,
        pagination: state.pagination.pagination,
        loadState: state.load.loadState,
        loadFailed: state.load.loadFailed,
        msg: state.load.msg
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, listAction, pageAction), dispatch),
    dispatch: dispatch
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(ListApp);
ListApp.contextTypes = {
    router: React.PropTypes.object
}
