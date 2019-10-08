import { API_URL } from '../config'
import { logout } from '../actions/auth'
import store from '../store'
import Cookies from 'js-cookie'

const makeJson = async (response, status) => {
    const json = await response.json()
    return Promise.resolve({...json, statusCode: status})
}

const responseHandler = () => response => {
    if (response.status === 401) {
        store.dispatch(logout())
    }
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
        const promise = makeJson(response, response.status)
        return promise
    }
    return response
}

export const getHeader = () => {
    const data = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': Cookies.get('token'),
    }
    return data
}

export const get = (url) => {
    return fetch(`${API_URL}/${url}`, {
        method: 'get',
        headers: getHeader(),
    })
    .then(responseHandler())
}

export const post = (url, body) => {
    return fetch(`${API_URL}/${url}`, {
        method: 'post',
        headers: getHeader(),
        body: JSON.stringify(body)
    })
    .then(responseHandler())
}
