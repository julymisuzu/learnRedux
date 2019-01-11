import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );

require('./reducer-example.jsx');
// require('./multiple-reducer-actions-example.jsx');
// require('./multiple-reducer-example.jsx');
// require('./redux-todo-example.jsx');
// require('./single-reducer-example.jsx');