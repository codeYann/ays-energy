import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import Login from './components/Login';

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login/>,
	},
]);

function App() {
	return (
		<div className='App'>
			<CssBaseline/>
			<RouterProvider router={router}/>
		</div>
	);
}

export default App;
