import React from 'react'
import cn from 'classnames'
import './inputs.css'

const randomId = () => {
	return '_' + Math.random().toString(36).substr(2, 9)
}

const Switch = ({value, onChange, id = randomId()}) => {
	const handleChange = ({target: {checked}}) => {
		onChange(checked)
	}
	return (
		<label className={cn('switch switch', {checked: value})} htmlFor={id} id="checkbox">
			<span className="switch__inner">
				<input 
					className="switch__input"
					type="checkbox"
					id={id}
					checked={value}
					onChange={handleChange} />
			</span>
		</label>
	)
}

export default Switch