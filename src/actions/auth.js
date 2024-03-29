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

export const logout = () => dispatch => {
	dispatch(setToken('', ''))
	.then(() => {
		dispatch(clearState())
		history.push('/login')
	})
}


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