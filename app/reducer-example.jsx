var redux = require('redux');
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting redux example');

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

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Juh'));

store.dispatch(actions.addHobby('Drawing'));
store.dispatch(actions.addHobby('Reading'));
store.dispatch(actions.addHobby('Watching videos'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Sherlock Holmes', 'policial'));
store.dispatch(actions.addMovie('O Auto da Compadecida', 'comedy'));
store.dispatch(actions.addMovie('Bird Man', 'drama'));
store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Lindert'));
