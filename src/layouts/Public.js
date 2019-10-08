import React from 'react'
import './layouts.css'

const PublicLayout = ({children}) => {

	return (
		<div className="d-flex flex-column justify-content-between" style={{height: '100vh'}}>
			<header className="container-fluid py-3 d-flex justify-content-between align-items-center">
				<div className="fs-15">LOGO</div>
			</header>
			<div>
				{children}
			</div>
			<footer className="public-footer container-fluid py-3 d-flex justify-content-center">
				<div className="fs-15 text-white">LOGO</div>
			</footer>
		</div>
	)
}

export default PublicLayout;
