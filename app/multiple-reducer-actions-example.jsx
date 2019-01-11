var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

// Name reducer and action generators
// -----------------
var nameReducer = (state = 'Anonymous', action) => {
  console.log('NAME_REDUCER');
  switch (action.type) {
    case 'CHANGE_NAME':
    console.log('SWITCH_CHANGE_NAME');
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  console.log('CHANGE_NAME');
  return {
    type: 'CHANGE_NAME',
    name
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

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
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

var addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
};
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

// https://www.google.com/maps?q=-30.026318,+-51.200609
// Map reducer and action generators
// -----------------
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('https://ipinfo.io').then(function (res) {
    var location = res.data.loc;
    //-30.026318,+-51.200609
    var baseUrl = 'https://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseUrl + location));
  })
};

var reducer = redux.combineReducers({
  map: mapReducer,
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

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>';
  }
});
// use this to unsubscribe to the subscribe
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

fetchLocation();

store.dispatch(changeName('Juh'));

store.dispatch(addHobby('Drawing'));
store.dispatch(addHobby('Reading'));
store.dispatch(addHobby('Watching videos'));
store.dispatch(removeHobby(2));

store.dispatch(addMovie('Sherlock Holmes', 'policial'));
store.dispatch(addMovie('O Auto da Compadecida', 'comedy'));
store.dispatch(addMovie('Bird Man', 'drama'));
store.dispatch(removeMovie(1));

store.dispatch(changeName('Lindert'));
