import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'js/reducers';

export default function configureStore(preloadedState) {
    const store = createStore(
        reducers,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    )
    return store
}