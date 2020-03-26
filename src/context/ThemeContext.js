import React from 'react';

const theme = {
	light: {
		'--box': 'hsl(0, 0%, 100%)',
		'--text': 'hsl(200, 15%, 8%)',
		'--input': 'hsl(0, 0%, 52%)',
		'--bg': 'hsl(0, 0%, 98%)'
	},
	dark: {
		'--box': 'hsl(209, 23%, 22%)',
		'--text': 'hsl(0, 0%, 100%)',
		'--input': 'hsl(0, 0%, 100%)',
		'--bg': 'hsl(207, 26%, 17%)'
	}
};

export const ThemeContext = React.createContext(theme);
