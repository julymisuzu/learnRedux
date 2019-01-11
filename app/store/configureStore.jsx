var redux = require('redux');
const thunk = require('redux-thunk').default;
import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from './../reducers/index';

export const configure = () => {
  const reducer = redux.combineReducers({
    map: mapReducer,
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
  });
  
  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}