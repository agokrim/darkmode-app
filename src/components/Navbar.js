import React, { Component } from 'react';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
	
	render() {
		return (
			<ThemeContext.Consumer>{(context) => {
			const theme = !context.lightTheme ? ' darkmode' : '';
			return (
				<div className={"navbar" + (theme)}>
					<h1>Navbar</h1>
					<ToggleTheme />
				</div>
				)
			}}</ThemeContext.Consumer>
		)
	}
}

export default Navbar;
