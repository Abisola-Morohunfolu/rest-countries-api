import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as HalfMoon } from '../../assets/moon-outline.svg';
import { ReactComponent as FullMoon } from '../../assets/moon-sharp.svg';

const header = props => {
	return (
		<header className={classes.Header}>
			<h1>Where in the World?</h1>
			<button onClick={props.clicked} className={classes.Button}>
				{props.mode === 'light' ? <HalfMoon /> : <FullMoon />}
				Dark Mode
			</button>
		</header>
	);
};

export default header;
