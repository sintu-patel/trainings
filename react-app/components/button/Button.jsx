import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonClass: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			buttonClass: 'active'
		});
	}
	render() {
		return (
			<button
				type="button"
				className={`button ${this.state.buttonClass}` }
				onClick={this.handleClick }
			>
				{this.props.text}
			</button>
		);
	}
}
export default Button;