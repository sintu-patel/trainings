import React from 'react';
import {ButtonTextContext} from '../../App.jsx';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Button'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			text: 'Button updated'
		});
	}
	render() {
		return (
			<div>
			<button
				type="button"
				className="button"
				onClick={this.handleClick }
			>
				{this.state.text}
			</button>
			<ButtonTextContext.Consumer>
				{text => text.name}
			</ButtonTextContext.Consumer>
			</div>
		);
	}
}
export default Button;