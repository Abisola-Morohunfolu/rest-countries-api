import React from 'react';
import classes from './BoxItems.module.css';
import Box from './Box/Box';

const boxItems = props => {
	if (props.data === null) {
		return null;
	}

	if (props.search) {
		return (
			<div className={classes.BoxItems}>
				{props.search.map(country => {
					return (
						<Box
							key={country.name}
							img={country.flag}
							name={country.name}
							region={country.region}
							population={country.population}
							capital={country.capital}
						/>
					);
				})}
			</div>
		);
	}

	return (
		<div className={classes.BoxItems}>
			{props.data.slice(0, 25).map(country => {
				return (
					<Box
						key={country.area}
						img={country.flag}
						name={country.name}
						region={country.region}
						population={country.population}
						capital={country.capital}
					/>
				);
			})}
		</div>
	);
};

export default boxItems;
