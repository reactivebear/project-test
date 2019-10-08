import { post, get } from '../api'
import * as types from './types'
import Cookies from 'js-cookie'
import { history } from '../store'
import { setUser } from './user'

export const login = data => dispatch => {
	post(`current-user/login-session`, data).then(res => {
		if (res.success) {
			dispatch(setToken(res.session_key, res.user.id))
			.then(() => {
				dispatch(setUser(res.user)).then(() => {
					history.push('/dashboard');
				})
			})
		}
	})
}

export const register = data => dispatch => {
	post(`register`, data).then(res => {
		if (res.statusCode === 200) {
			history.push('/login')
		}
	})
}

export const logout = () => dispatch => {
	dispatch(setToken('', ''))
	.then(() => {
		dispatch(clearState())
		history.push('/login')
	})
}

export const verifiedEmail = hash => dispatch => (
	get(`verify/${hash}`).then(res => res.message)
)

export const sendEmailRecovery = data => dispatch => (
	post(`recovery`, data).then(res => res.statusCode === 200)
)

export const reset = data => dispatch => (
	post(`reset`, data).then(res => res.statusCode === 200)
)

export const verifyHash = hash => dispatch => (
	get(`hash/${hash}`).then(res => res.statusCode === 200)
)

export const clearState = () => ({
	type: types.CLEAR_STATE,
})

export const setToken = (token, userId) => {
	Cookies.set('token', token)
	Cookies.set('user_id', userId)
	return Promise.resolve({
  	type: types.SET_TOKEN,
		token,
		userId,
	})
}