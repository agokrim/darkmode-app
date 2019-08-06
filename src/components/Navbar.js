import React, { Component, useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
	const { lightTheme } = useContext(ThemeContext);
	const theme = !lightTheme ? ' darkmode' : '';
	return (
		<div className={"navbar" + (theme)}>
 			<h1>Navbar</h1>
 			<ToggleTheme />
 		</div>
	)
}

export default Navbar;
