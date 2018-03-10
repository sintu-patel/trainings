import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../react-app/app/pages/App.jsx';
import SimpleGrid from '../react-app/app/pages/simple-grid/SimpleGrid.jsx';

render((
  <BrowserRouter>
  	<div>
    	<Route exact path='/' component={App} />
    	<Route exact path='/test' component={SimpleGrid} />
    </div>
  </BrowserRouter>
), document.getElementById('app'));