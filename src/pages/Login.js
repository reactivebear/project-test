import React, { useState } from 'react'
import TextField from '../components/inputs/TextField'
import BtnMain from '../components/buttons/BtnMain'
import { login } from '../actions/auth'
import { useDispatch } from 'react-redux'
import PublicLayout from '../layouts/Public'
import { history } from '../store'

const Login = () => {
	const dispatch = useDispatch()
	const [auth, setAuth] = useState({email: '', password: ''})
	const [validate, setValidate] = useState({email: '', password: ''})
	const handleChange = (field, value) => {
		if (validate[field]) {
			setValidate({...validate, [field]: ''})
		}
		setAuth({...auth, [field]: value})
	}
	const isValid = () => {
		const temp = Object.keys(validate).reduce((obj, field) => {
			obj[field] = !auth[field] ? `validation.required` : ''
			return obj
		}, {})
		setValidate(temp)
		return !Object.keys(temp).filter(field => temp[field]).length
	}
	const handleSubmit = e => {
		e.preventDefault()
		if (isValid()) {
			dispatch(login(auth))
		}
	}
	return (
		<PublicLayout>
			<div className="h-100 d-flex align-items-center justify-content-center">
				<div className="col-sm-5 col-md-5 col-lg-4 col-xl-3 mb-5">
					<form onSubmit={handleSubmit} className="mb-5">
						<h3 className="text-center mb-5">Login</h3>
						<div className="mb-4">
							<TextField
								isValid={!validate.email}
								errorMessage="email is required"
								value={auth.email}
								label="Email"
								onChange={val => handleChange('email', val)} />
						</div>
						<div className="mb-4">
							<TextField
								isValid={!validate.password}
								errorMessage="Password is required"
								type="password"
								label="Password"
								value={auth.password}
								onChange={val => handleChange('password', val)} />
						</div>
						<div className="text-center form-group">
							<BtnMain title="Submit" type="submit" />
						</div>
					</form>
					<div className="text-center">
					</div>
				</div>
			</div>
		</PublicLayout>
	)
}

export default Login;
