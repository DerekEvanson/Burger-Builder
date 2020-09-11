import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Burger from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
	render() {
		return (
			<div>
				<Layout />
				<Burger />
			</div>
		);
	}
}

export default App;
