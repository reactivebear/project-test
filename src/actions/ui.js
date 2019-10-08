import * as types from './types'
import store from '../store'
import { get } from '../api'

export const setAlert = (text = '', level = 'success', delay = 2000) => ({
	type: types.SET_ALERT,
  data: {text, level, delay}
})

export const setUiKey = (key, data) => ({
	type: types.SET_UI_KEY,
	key,
	data,
})

export const toggleModal = (show = false, title = '', content = null, className = '') => dispatch => {
	let resolver = null
	const promise = new Promise((resolve, reject) => {
		resolver = resolve
	})
	dispatch({
		type: types.TOGGLE_MODAL,
		data: {show, title, content, className, resolver},
	})
	return promise
}

export const closeModal = () => ({
	type: types.CLOSE_MODAL,
})

export const getSidebar = () => (dispatch) => {
	return get(`sidebar`).then(res => {
		return JSON.parse(sidebar);
	})
}

let sidebar = `{"success":true,"organizations":[{"id":8,"name":"Hendrik's Test ORG","urlName":"hendrik-test","orgType":"work","created":1509370818,"ownerUserId":2,"role":"manager","tasksOverall":"1","tasksOverallNotViewed":0,"tasksEveryone":"2","tasksEveryoneNotViewed":0,"localPermissions":["acl.org.current.manage"]},{"id":9,"name":"Clonedesk1","urlName":"test-t-r-test","orgType":"private","created":1509456772,"ownerUserId":25,"role":"member","tasksOverall":"0","tasksOverallNotViewed":0,"tasksEveryone":"0","tasksEveryoneNotViewed":0,"localPermissions":[]},{"id":42,"name":"Philipp's Test ORG II ","urlName":"philipp","orgType":"work","created":1525170900,"ownerUserId":2,"role":"manager","tasksOverall":"6496","tasksOverallNotViewed":6440,"tasksEveryone":"6513","tasksEveryoneNotViewed":6441,"localPermissions":["acl.org.current.manage"]},{"id":43,"name":"Philipp's Test ORG III","urlName":"phil3","orgType":"work","created":1525173616,"ownerUserId":2,"role":"owner","tasksOverall":"6496","tasksOverallNotViewed":6440,"tasksEveryone":"6513","tasksEveryoneNotViewed":6441,"localPermissions":["acl.org.current.delete","acl.org.current.manage"]},{"id":48,"name":"mine-1526034195708","urlName":"url-1526034195760","orgType":"private","created":1526034206,"ownerUserId":2,"role":"owner","tasksOverall":"6490","tasksOverallNotViewed":6439,"tasksEveryone":"6507","tasksEveryoneNotViewed":6440,"localPermissions":["acl.org.current.delete","acl.org.current.manage"]},{"id":50,"name":"0lympy test","urlName":"olympy-test","orgType":"work","created":1531127635,"ownerUserId":2,"role":"owner","tasksOverall":"10","tasksOverallNotViewed":2,"tasksEveryone":"28","tasksEveryoneNotViewed":14,"localPermissions":["acl.org.current.delete","acl.org.current.manage"]},{"id":51,"name":"org rights test","urlName":"org-rights-test","orgType":"private","created":1532358423,"ownerUserId":2,"role":"member","tasksOverall":"0","tasksOverallNotViewed":0,"tasksEveryone":"0","tasksEveryoneNotViewed":0,"localPermissions":[]},{"id":80,"name":"Hendriks Test 2019","urlName":"hendrik-2019","orgType":"work","created":1560242612,"ownerUserId":2,"role":"owner","tasksOverall":"0","tasksOverallNotViewed":0,"tasksEveryone":"0","tasksEveryoneNotViewed":0,"localPermissions":["acl.org.current.delete","acl.org.current.manage"]},{"id":82,"name":"autostarts","urlName":"autostarts","orgType":"work","created":1563449777,"ownerUserId":2,"role":"member","tasksOverall":"0","tasksOverallNotViewed":0,"tasksEveryone":"0","tasksEveryoneNotViewed":0,"localPermissions":[]},{"id":89,"name":"Clonedesk pvt ltd","urlName":"clonedesk-pvt-ltd","orgType":"private","created":1567505172,"ownerUserId":2,"role":"owner","tasksOverall":"36","tasksOverallNotViewed":32,"tasksEveryone":"39","tasksEveryoneNotViewed":33,"localPermissions":["acl.org.current.delete","acl.org.current.manage"]}],"projects":[],"channels":[]}`