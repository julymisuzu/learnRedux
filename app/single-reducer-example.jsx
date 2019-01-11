var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
// all the actions need to be objects
var reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((item) => item.id != action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((item) => item.id != action.id)
      };
    default:
      return state;
  };
};


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
