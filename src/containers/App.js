import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import axios from 'axios';
import { Switch, Route } from 'react-router';
import Home from '../components/Home/Home';
import Filter from '../components/Filter/Filter';
import Country from '../components/Country/Country';
// import { Switch, Route } from 'react-router-dom';

const colorModeStore = localStorage.getItem('darkmode');
const currentColorMode = colorModeStore ? 'dark' : 'light';

class App extends Component {
	state = {
		allCountries: null,
		selectedCountry: null,
		colorMode: currentColorMode,
		errorMessage: null,
		searchResult: null
	};
	static contextType = ThemeContext;

	//switch color mode
	toggleColorMode = mode => {
		if (mode === 'light') {
			this.setState({ colorMode: 'dark' });
			localStorage.setItem('darkmode', true);
		} else {
			this.setState({ colorMode: 'light' });
			localStorage.setItem('darkmode', false);
		}
	};

	fetchData = () => {
		try {
			axios
				.get('https://restcountries.eu/rest/v2/all')
				.then(response => {
					if (response.data) {
						this.setState({
							allCountries: response.data,
							errorMessage: null
						});
					}
				})
				.catch(error => {
					this.setState({
						errorMessage: 'Something went wrong',
						allCountries: null
					});
				});
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	changedInputHadler = event => {
		const inputValue = event.target.value.toLowerCase();
		const allCountries = [...this.state.allCountries];

		const result = allCountries.filter(
			country =>
				country.name.toLowerCase().includes(inputValue) ||
				country.region.toLowerCase().includes(inputValue)
		);
		this.setState({
			...this.state,
			searchResult: result
		});
	};

	render() {
		const currentTheme = {
			...this.context[this.state.colorMode]
		};

		const SingleCountry = ({ match }) => {
			const param = match.params.country.toLowerCase();
			const filtered = this.state.allCountries.filter(country => country.name !== param)[0];

			return <Country country={filtered} />;
		};
		return (
			<div className="App" style={currentTheme}>
				<Header
					clicked={() => this.toggleColorMode(this.state.colorMode)}
					mode={this.state.colorMode}
				/>
				<Filter changed={this.changedInputHadler} />
				<Switch>
					<Route
						exact
						path="/"
						component={() => (
							<Home allCountries={this.state.allCountries} searchResult={this.state.searchResult} />
						)}
					/>
					<Route path="/:country" component={SingleCountry} />
				</Switch>
			</div>
		);
	}
}

export default App;
