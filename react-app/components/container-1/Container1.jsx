import React from 'react';
import Button from '../button-with-context/Button.jsx'

class Container1 extends React.Component {
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
export default Container1;