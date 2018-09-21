import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(preloadedState) {
  // const middlewares = [loggerMiddleware, thunkMiddleware]
  // const middlewareEnhancer = applyMiddleware(...middlewares)
  // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  // const composedEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, preloadedState); // ,composedEnhancers
  return store;
}
