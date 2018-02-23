import React from 'react';
import Button from './components/button/Button.jsx'

class App extends React.Component {
	render() {
		return (
			<div className="main-app">
				Hello
				<br />
				<Button text='Hello button' />
			</div>
		);
	}
}
export default App;