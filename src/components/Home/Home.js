import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import BoxItems from '../BoxItems/BoxItems';

const home = props => {
	return (
		<Auxiliary>
			<BoxItems data={props.allCountries} search={props.searchResult} />
		</Auxiliary>
	);
};

export default home;
