import React, { Component } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleTheme extends Component {

	state = {
		icon: false
	}

	iconChange = () => {
		this.setState({ icon: !this.state.icon });
	}

	render() {
		return (
			<ThemeContext.Consumer>{(context) => {
				return (
					<div className="toggle__box">
						<span>
						{this.state.icon ? (
							<img src={moon} className="moon-icon" />
						) : (
							<img src={sun} className="sun-icon" />
						)}
						</span>
						<div className="toggle__btn" onClick={context.toggleTheme}>
							<input type="checkbox" className="checkbox" onChange={this.iconChange}  />
							<div className="circle"></div>
							<div className="layer"></div>
						</div>
					</div>
				)
			}}</ThemeContext.Consumer>
		)
	}
}

export default ToggleTheme;
