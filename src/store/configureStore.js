import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './../reducers/mainScreenReducer';
import breedReducer from './../reducers/viewImageReducer';

const appReducers = combineReducers({
  reducer,
  breedReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);
