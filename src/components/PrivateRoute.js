import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateLayout from '../layouts/Private'
import { getUser } from '../actions/user'

const PrivateRoute = ({dispatch, user, userId, isUserLoaded, token, component: Component, ...rest}) => {
	if (token && userId &&!user.id && !isUserLoaded) {
		dispatch(getUser(userId))
	}
	const render = props => {
		if (!token && !user.id) {
			return 'Please wait...'
		} else if (token && user.id) {
			return  <PrivateLayout {...rest} user={user} >
						<Component {...props} />
					</PrivateLayout>
		}
		return <Redirect to="/login" />
	}
	return <Route {...rest} render={render} />
}

const mapStateToProps = ({user}) => ({
	isUserLoaded: user.loaded,
	token: user.token,
	user: user.data,
	userId: user.userId,
})

export default connect(mapStateToProps)(PrivateRoute)