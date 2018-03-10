import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button.jsx'

class App extends React.Component {
	render() {
		return (
			<div className="main-app">
				Hello
				<br />
				<Button text='Hello button' />
				<Link to="/test">Test</Link>
			</div>
		);
	}
}
export default App;