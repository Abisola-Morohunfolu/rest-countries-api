import React from 'react';
import classes from './Box.module.css';
import { Link } from 'react-router-dom';

const formatString = numb => {
	return numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const box = props => {
	return (
		<Link to="/about-country" onClick={props.clicked}>
			<section className={classes.Box}>
				<div className={classes.BoxImage}>
					<img src={props.img} alt={props.name} />
				</div>
				<div className={classes.BoxText}>
					<h3 className={classes.MainHeading}>{props.name}</h3>
					<h5 className={classes.SubHeading}>
						<span>Population: </span>
						<span>{formatString(props.population)}</span>
					</h5>
					<h5 className={classes.SubHeading}>
						<span>Region: </span>
						<span>{props.region}</span>
					</h5>
					<h5 className={classes.SubHeading}>
						<span>Capital: </span>
						<span>{props.capital}</span>
					</h5>
				</div>
			</section>
		</Link>
	);
};

export default box;
