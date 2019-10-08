import React from 'react'

const Href = ({className, href = '/', onClick, children}) => {
	const handleClick = e => {
		e.preventDefault()
		e.stopPropagation();
		if (onClick) {
			onClick()
		}
	}
	return (
		<a href={href} className={className} onClick={handleClick}>{children}</a>
	)
}

export default Href