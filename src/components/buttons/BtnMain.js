import React from 'react'
import cn from 'classnames'
import './buttons.css'

const BtnMain = ({type = 'button', title, onClick, className}) => {
	return (
		<button type={type} onClick={onClick} className={cn('btn btn-primary', className)}>{title}</button>
	)
}

export default BtnMain