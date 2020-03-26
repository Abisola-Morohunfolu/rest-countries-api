import React from 'react';
import classes from './Country.module.css';
import { ReactComponent as Arrow } from '../../assets/arrow-back-outline.svg';

const Country = props => {
	// const {
	// 	img,
	// 	name,
	// 	nativeName,
	// 	population,
	// 	region,
	// 	topLevelDomain,
	// 	currencies,
	// 	languages,
	// 	subregion,
	// 	capital
	// } = props.country;
	return (
		<div className={classes.Country}>
			<button>
				<Arrow />
				Back
			</button>
			<section className={classes.Country}>
				<div className={classes.ImgBox}>
					<img src={props.country.img} alt={props.country.name} />
				</div>
				<div className={classes.TextBox}>
					<h3 className={classes.MainHeading}>{props.country.name}</h3>
					<div className={classes.InfoText}>
						<h5 className={classes.SubHeading}>
							<span>Native Name: </span>
							<span>{props.country.nativeName}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Top Level Domain: </span>
							<span>{props.country.topLevelDomain}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Population: </span>
							<span>{props.country.population}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Currencies: </span>
							<span>{props.country.currencies.name}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Region: </span>
							<span>{props.country.region}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Languages: </span>
							<span>{props.country.languages.map(lang => lang.name)}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Sub Region: </span>
							<span>{props.country.subregion}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Capital: </span>
							<span>{props.country.capital}</span>
						</h5>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Country;
