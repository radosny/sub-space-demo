import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createProvider } from 'react-redux';

import reducer from './reducer';
import saga from './saga';
import { PREFIX } from './constants';

const getDevTools = () => {
    if (process.env.NODE_ENV !== 'production') {
        return typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension({
            name: `${PREFIX}-store`
        }) : f => f;
    }
    return f => f;
};

const sagaMiddleware = createSagaMiddleware();
const createStoreWithSaga = compose(
    applyMiddleware(sagaMiddleware),
    getDevTools()
)(createStore);

export const dadJokesStore = createStoreWithSaga(reducer);
sagaMiddleware.run(saga);

export const DadJokesProvider = createProvider(PREFIX);
