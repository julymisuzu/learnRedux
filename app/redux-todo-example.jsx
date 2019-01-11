var redux = require('redux');

console.log('Starting redux example of Todo');

var stateDefault = {
  searchText: '',
  todos: [],
  showCompleted: false
}
// change search text
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'CHANGE_SHOW_COMPLETED':
      return {
        ...state,
        showCompleted: action.showCompleted
      }
    default:
      return state;
  }
};


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  var newValue = state.searchText + ' - ' + state.showCompleted;

  document.getElementById('app').innerHTML = newValue;
});

var currentStore = store.getState();
console.log('Current Store:', currentStore);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text'
};
store.dispatch(action);

store.dispatch({
  type: 'CHANGE_SHOW_COMPLETED',
  showCompleted: true
});

console.log('New action value', store.getState());