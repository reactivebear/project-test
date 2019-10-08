import { get, post } from '../api'
import * as types from './types'

export const getUser = (userId) => dispatch => {
	dispatch(setUserLoaded(true))
	get(`users/${userId}`).then(res => {
		if (res.statusCode === 200) {
			dispatch(setUser(res.user)).then(() => {
				dispatch(setUserLoaded(false))
			})
		}
	})
}

export const getAllUsers = (filter = {}) => dispatch => (
	post(`user`, {filter}).then(res => res.data)
)

export const toggleApproveUser = (userId, data) => dispatch => (
	post(`user/${userId}/approve`, data).then(res => res.data)
)

export const setUser = data => (
	Promise.resolve({
		type: types.SET_USER,
		data,
	})
)

const setUserLoaded = value => ({
	type: types.SET_USER_LOADED,
	value,
})