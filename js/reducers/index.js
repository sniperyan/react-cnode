import {combineReducers} from 'redux';
import list from './indexList';
import load from './load';
import topicDetail from './topic';
import pagination from './pagination';
import user from './user';
import messages from './messages';

const reducers = {
    list,
    topicDetail,
    pagination,
    user,
    messages,
    load
};

export default combineReducers({
    ...reducers
});
