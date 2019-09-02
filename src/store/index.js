import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const logger = createLogger();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
