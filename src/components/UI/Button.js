import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = props => {
	return (
		<button className={classes.Button}>
			<Link to={props.route} onClick={props.clicked}>
				{props.children}
			</Link>
		</button>
	);
};

export default Button;
