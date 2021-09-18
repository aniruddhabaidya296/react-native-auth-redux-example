import rootSaga from './root_saga';
import reducer from './combined_reducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
