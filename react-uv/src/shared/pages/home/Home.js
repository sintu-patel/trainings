import React from 'react';
import PropTypes from 'prop-types';

import {
  Route,
  Switch,
  Link
} from 'react-router-dom';


const Home = () => (
  <div className="App-intro">
    <p>Home</p>
    <Link to={`/test/123`}>
      Test the router
    </Link>
  </div>
)


export default Home;
