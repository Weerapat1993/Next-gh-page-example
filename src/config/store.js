import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducers from './rootReducers'

const middlewares = [thunk]
if(process.env.NODE_ENV === 'development') middlewares.push(createLogger)

const storeEnhancer = [
	applyMiddleware(...middlewares)
]

const finalCreateStore = compose(...storeEnhancer)(createStore)

export const configureStore = (initialState, options) => {
  return finalCreateStore(rootReducers, initialState);
};
