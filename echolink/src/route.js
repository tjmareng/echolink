import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './containers/App';
import Chat from './containers/Chat';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={App} /> */}
    <Route path="./containers/Chat" component={Chat} />
  </Route>
);