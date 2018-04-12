import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const getDevTools = () => {
    if (process.env.NODE_ENV !== 'production') {
        return typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension({
            name: 'Core store'
        }) : f => f;
    }
    return f => f;
};

const sagaMiddleware = createSagaMiddleware();
const createStoreWithSaga = compose(
    applyMiddleware(sagaMiddleware),
    getDevTools()
)(createStore);

const store = createStoreWithSaga(reducer);
sagaMiddleware.run(saga);

export default store;
