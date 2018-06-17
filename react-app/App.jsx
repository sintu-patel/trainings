import React from 'react';
import Container1 from './components/container-1/Container1.jsx'
var defaultData = {
	name: 'TestX'
};
class App extends React.Component {
	render() {
		var data = {
			x: 'Test',
			y: 'Test2',
			z: 'test3'
		};
		return (
				<div className="main-app">
					Hello
					<br />
					<Container1 {...data} />
				</div>
		);
	}
}
export default App;