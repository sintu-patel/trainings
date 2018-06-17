import React from 'react';
import Button from '../button/Button.jsx'

class Container1 extends React.Component {
	render() {
		return (
				<div className="main-app">
							{this.props.x} <br />
							{this.props.y}<br />
							{this.props.z}<br />
					{this.props.account && 
						<div className="active">
							{this.props.account.bal}
						</div>
					}
					{!this.props.account && 
						<div className="non-active">
							<div className="msg">Non active account</div>
							<Button text='Hello button' />
						</div>
					}
				</div>
		);
	}
}
export default Container1;