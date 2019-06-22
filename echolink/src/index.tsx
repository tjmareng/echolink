// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './containers/App/index';
import Chat from './containers/Chat/route';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './reducers';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import thunkMiddleware from 'redux-thunk';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

const reducer = createRootReducer();
const store = createStore(reducer);
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/Chat" component={Chat} />
      </div>
    </Router>
  </Provider>


  , document.getElementById('root')
);