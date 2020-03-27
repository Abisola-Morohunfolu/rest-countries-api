import React from 'react';
import classes from './Country.module.css';
import { ReactComponent as Arrow } from '../../assets/arrow-back-outline.svg';
import Button from '../UI/Button';
import Loader from '../UI/Loader/Loader';
import Redirect from './RedirectBtn';

const formatString = numb => {
	return numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const Country = props => {
	if (props.loading) {
		return <Loader />;
	}

	if (props.country === null) {
		return <Redirect />;
	}
	return (
		<div className={classes.Country}>
			<Button route="/">
				<Arrow />
				Back
			</Button>

			<section className={classes.CountrySection}>
				<div className={classes.ImgBox}>
					<img src={props.country.flag} alt={props.country.name} />
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
							<span>{formatString(props.country.population)}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Currencies: </span>
							<span>{props.country.currencies[0].name}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Region: </span>
							<span>{props.country.region}</span>
						</h5>
						<h5 className={classes.SubHeading}>
							<span>Languages: </span>

							<span>
								{props.country.languages.map(lang => {
									return lang.name + ' ';
								})}
							</span>
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
					<div className={classes.BorderBox}>
						<h5>Borders Countries: </h5>
						{props.country.borders.length !== 0 ? (
							props.country.borders.map(border => (
								<Button
									route="/about-country"
									clicked={() => props.selectBorder(border)}
									key={border}
								>
									{border}
								</Button>
							))
						) : (
							<span style={{ fontSize: '1.2rem' }}>None</span>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Country;
