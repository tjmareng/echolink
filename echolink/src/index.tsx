// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App/index';
// import { Router, browserHistory} from 'react-router';
// import routes from './route';
// import './styles/App.css';
// import './styles/index.css';

// const initialState = {};

// ReactDom.render(
//     <Router history={browserHistory} routes={routes} />,
//     document.querySelector('#app')
//   );
// //ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import route from './route';

const initialState = {};

ReactDOM.render(
  <Router routes={route} />,
  document.getElementById('root')
)