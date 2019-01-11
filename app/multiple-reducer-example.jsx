var redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generators
// -----------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

// Hobbies reducer and action generators
// -----------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id != action.id)
    default:
      return state;
  }
};

// Movies reducer and action generators
// -----------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id != action.id)
    default:
      return state;
  }
};
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes - same as knockoutjs
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  var valuesToPrint = state.name;

  document.getElementById('app').innerHTML = valuesToPrint;

  console.log('New state', store.getState());
});
// use this to unsubscribe to the subscribe
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

var action = { type: 'CHANGE_NAME', name: 'Juh' };
store.dispatch(action);
store.dispatch({ type: 'ADD_HOBBY', hobby: 'Drawing' });
store.dispatch({ type: 'ADD_HOBBY', hobby: 'Reading' });
store.dispatch({ type: 'ADD_HOBBY', hobby: 'Watching videos' });
store.dispatch({ type: 'ADD_MOVIE', movie: 'Sherlock Holmes', genre: 'policial' });
store.dispatch({ type: 'ADD_MOVIE', movie: 'O Auto da Compadecida', genre: 'comedy' });
store.dispatch({ type: 'CHANGE_NAME', name: 'Lindert' });
store.dispatch({ type: 'REMOVE_HOBBY', id: 2 });
store.dispatch({ type: 'ADD_MOVIE', movie: 'Bird Man', genre: 'drama' });
store.dispatch({ type: 'REMOVE_MOVIE', id: 1 });
