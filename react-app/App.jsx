import React from 'react';
import Container1 from './components/container-1/Container1.jsx'
var defaultData = {
	name: 'TestX'
};
class App extends React.Component {
	render() {
		var data = {
			name: 'Test'
		};
		return (
				<div className="main-app">
					Hello
					<br />
					<Container1 />
				</div>
		);
	}
}
export default App;