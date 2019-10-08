import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { getSidebar } from '../actions/ui'
import Accordion from '../components/buttons/Accordion'

function Sidebar ({path, user}) {

const [state, setState] = useState({});

const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSidebar()).then(({channels, organizations, projects}) => {
			setState({channels, organizations, projects})
		}) 
	}, [])

	const [, page] = path.split('/')
	const key = user.admin ? 'admin' : 'user'
	return (
		<div className="nav flex-column nav-pills">
			{
				Object.keys(state).map((item, i) => 

						<Accordion
							key={i}
							className={cn('nav-link rounded-0', {active: page === item.key})}
							title={item}
							data={state[item]}
						>
						</Accordion>
)
			}
    </div>
	)
}

export default Sidebar;
