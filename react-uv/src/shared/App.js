import React from 'react';
import PropTypes from 'prop-types';
import Home from './pages/home/Home';
import AboutUs from './pages/about-us/AboutUs';

import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <Route path="/" component={ ({ match }) => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test\/:id" component={AboutUs} />
          <Route component={AboutUs}/>
        </Switch>
      </div>
    )}/>
  </div>
)

export default App
