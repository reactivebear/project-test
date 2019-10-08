import React, { memo } from 'react'
import Header from '../components/Header'
import './layouts.css'
import Sidebar from '../components/Sidebar'

const PrivateLayout = ({children, path, user}) => {
	return (
		<div className="private-layout">
			<Header />
			<div className="d-flex">
				<div className="private-layout-side-bar border-right bg-white pt-2 d-none d-lg-block">
					<Sidebar path={path} user={user} />
				</div>
				<div className="private-layout-content bg-white overflow-auto flex-fill">
					{children}
				</div>
			</div>
		</div>
	)
}

const isEqual = (prev, next) => {
	return prev.path === next.path
}

export default memo(PrivateLayout, isEqual)