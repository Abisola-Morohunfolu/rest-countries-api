import React from 'react';
import classes from './BoxItems.module.css';
import Box from './Box/Box';
import Loader from '../UI/Loader/Loader';

const boxItems = props => {
	if (props.loading) {
		return <Loader />;
	}

	if (props.data === null) {
		return (
			<div style={{ height: '100vh', backgroundColor: 'var(--bg)', textAlign: 'center' }}>
				<p style={{ fontSize: '1.6rem', color: 'var(--text)' }}>
					Something went wrong! Reload Page
				</p>
			</div>
		);
	}

	//return searched items
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
							clicked={() => props.click(country.name)}
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
						clicked={() => props.click(country.name)}
					/>
				);
			})}
		</div>
	);
};

export default boxItems;
