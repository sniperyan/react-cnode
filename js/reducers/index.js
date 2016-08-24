import {combineReducers} from 'redux';
import list from './indexList';
import load from './load';
import topicDetail from './topic';
import pagination from './pagination';
import user from './user';

const reducers = {
    list,
    topicDetail,
    pagination,
    user,
    load
};

export default combineReducers({
    ...reducers
});
