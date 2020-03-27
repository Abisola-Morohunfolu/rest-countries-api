import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import axios from 'axios';
import { Switch, Route } from 'react-router';
import Filter from '../components/Filter/Filter';
import Country from '../components/Country/Country';
import BoxItems from '../components/BoxItems/BoxItems';

//get current color mode from local storage
const colorModeStore = localStorage.getItem('darkmode');
const currentColorMode = colorModeStore ? 'dark' : 'light';

class App extends Component {
	state = {
		allCountries: null,
		selectedCountry: null,
		colorMode: currentColorMode,
		errorMessage: null,
		searchResult: null,
		isLoading: false
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

	//fecth all countries data
	fetchData = () => {
		this.setState({
			isLoading: true
		});
		try {
			axios
				.get('https://restcountries.eu/rest/v2/all')
				.then(response => {
					if (response.data) {
						this.setState({
							allCountries: response.data,
							errorMessage: null,
							isLoading: false
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

	//search and filter countries
	changedInputHadler = event => {
		const inputValue = event.target.value.toLowerCase();

		//filter if there is a state
		if (this.state.allCountries) {
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
		}
	};

	//fecth a selected country
	fetchCountry = async country => {
		this.setState({
			isLoading: true
		});
		axios.get(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
			this.setState({
				...this.state,
				selectedCountry: response.data[0],
				isLoading: false
			});
		});
	};

	selectCountryHandler = name => {
		const countryName = name.toLowerCase();
		this.fetchCountry(countryName);
	};

	//fetch country with code
	fetchCountryWithCode = async country => {
		this.setState({
			isLoading: true
		});
		axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`).then(response => {
			console.log(response);
			this.setState({
				...this.state,
				selectedCountry: response.data,
				isLoading: false
			});
		});
	};

	selectBorderCountryHandler = code => {
		console.log(code);
		const countryCode = code.toLowerCase();
		this.fetchCountryWithCode(countryCode);
	};

	render() {
		const currentTheme = {
			...this.context[this.state.colorMode]
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
							<BoxItems
								data={this.state.allCountries}
								search={this.state.searchResult}
								click={this.selectCountryHandler}
								loading={this.state.isLoading}
							/>
						)}
					/>
					<Route
						path="/about-country"
						component={() => (
							<Country
								country={this.state.selectedCountry}
								loading={this.state.isLoading}
								selectBorder={this.selectBorderCountryHandler}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
