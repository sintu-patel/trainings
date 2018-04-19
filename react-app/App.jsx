import React from 'react';
import Container1 from './components/container-1/Container1.jsx'
var defaultData = {
	name: 'TestX'
};
export const ButtonTextContext = React.createContext(defaultData);
class App extends React.Component {
	render() {
		var data = {
			name: 'Test'
		};
		return (
			<ButtonTextContext.Provider value={data} >
				<div className="main-app">
					Hello
					<br />
					<Container1 />
				</div>
			</ButtonTextContext.Provider>
		);
	}
}
export default App;