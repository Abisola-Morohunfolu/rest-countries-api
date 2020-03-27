import React from 'react';
import classes from './Filter.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search-outline.svg';
import { withRouter } from 'react-router-dom';

const Filter = props => {
	//only display on homepage
	if (props.location.pathname === '/') {
		return (
			<section className={classes.Filter}>
				<div className={classes.SearchBox}>
					<label htmlFor="search">
						<SearchIcon />
					</label>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search for a country"
						onChange={props.changed}
						value={props.value}
					/>
				</div>
				<div className={classes.SelectBox}>
					{/* <label htmlFor="filter"></label> */}
					<select name="filter" id="filter" onChange={props.changed}>
						<option value="" hidden>
							Filter by region
						</option>
						<option value="Africa">Africa</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>
			</section>
		);
	} else {
		return null;
	}
};

export default withRouter(Filter);
