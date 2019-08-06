import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const MainBody = () => {
	const { lightTheme } = useContext(ThemeContext);
	const theme = !lightTheme ? ' darkmode' : '';

	return (
		<div className={"" + (theme)}>
			<div className="main-body">
				<h1>MainBody</h1>
				<h2>Subtitle</h2>
				<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be
				 cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many
				 components within an application. Context provides a way to share values like these between components
				 without having to explicitly pass a prop through every level of the tree.</p>
				 <h2>Subtitle</h2>
				<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be
				 cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many
				 components within an application. Context provides a way to share values like these between components
				 without having to explicitly pass a prop through every level of the tree.</p>
				 <h2>Subtitle</h2>
				<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be
				 cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many
				 components within an application. Context provides a way to share values like these between components
				 without having to explicitly pass a prop through every level of the tree.</p>
			</div>
		</div>
	)
} 

export default MainBody;
