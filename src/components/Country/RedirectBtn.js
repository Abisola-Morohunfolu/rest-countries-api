import React from 'react';
import classes from './Redirect.module.css';
import Button from '../UI/Button';

const Redirect = () => {
	return (
		<div className={classes.Container}>
			<Button route="/">Oops! Something went wrong. Go Back Home</Button>
		</div>
	);
};

export default Redirect;
