import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

const pages = {
	'/dashboard': lazy(() => import('./pages/Dashboard')),
	'/:pageKey': lazy(() => import('./pages/Content')),
}

const Login = lazy(() => import('./pages/Login'))

const App = () => {
	return (
		<div className="App">
			<Suspense fallback={<div style={{height: '100vh'}}></div>}>
				<Switch>
		  		<Route exact path="/login" component={Login} />
		  		{
		  			Object.keys(pages).map((path, i) =>
		  				<PrivateRoute key={i} exact path={path} component={pages[path]} />)
		  		}
		  		<Redirect to="/login" />
				</Switch>
			</Suspense>
		</div>
	)
}

export default App
