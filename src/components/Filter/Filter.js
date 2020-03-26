import React from 'react';
import classes from './Filter.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search-outline.svg';

const filter = props => {
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
};

export default filter;
