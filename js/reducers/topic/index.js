import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_TOPIC:
            return Object.assign({}, state, {
                topicDetail: action.data
            });
        /**
         * 不直接修改 state 中的字段，而是返回新对象
         */
        case types.SET_REPLYBOX_DISPLAY:
            return {
                topicDetail:{
                    ...state.topicDetail,
                    replies: state.topicDetail.replies.map((reply, index)=> {
                        if(index === action.data.index){
                            return{
                                ...reply,
                                display:action.data.display
                            }
                        }
                        return reply;
                    })
                }
            }
        case types.SET_ZAN:
            var newState = {
                topicDetail:{
                    ...state.topicDetail,
                    replies: state.topicDetail.replies.map((reply, index)=> {
                        if(index === (action.data.index-1)){
                            var ups = state.topicDetail.replies[index].ups;
                            var uid = action.data.uid;
                            if(action.data.action==='down'){
                                //取消赞
                                for (let i = 0; i < ups.length; i++) {
                                    if (ups[i] === uid) {
                                        ups.splice(i, 1);
                                    };
                                }
                            }else {
                                ups.push(uid);
                            }
                            return{
                                ...reply,
                                ups:ups
                            }
                        }
                        return reply;
                    })
                }
            }
            return newState;
        default:
            return state;
    }
}