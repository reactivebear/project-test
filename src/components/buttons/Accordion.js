import React, { useState } from 'react'
import './buttons.css'
import cn from 'classnames'
import Href from './Href'
import {withRouter} from 'react-router-dom'

function Accordion({title, data, history}) {

  const [state, setState] = useState({
    opened: false
  })

  const handleClick = (link) => {
    history.push(`/${link}`)
  }

    return (
      <div className={`accordion-item, ${state.opened && 'accordion-item--opened'}`} onClick={() => {setState({ opened: !state.opened })}}>
        <div className='accordion-item__line'>
          <h3 className='accordion-item__title'>
            {title}
          </h3>
          <span className='accordion-item__icon'/>
        </div>
          <div className='accordion-item__inner'>
            <div className='accordion-item__content'>
              <div className='accordion-item__paragraph'>
                {data.map((i, idx) => {
                  return (
								    <Href onClick={() => handleClick(i.urlName) } key={idx} className={cn('nav-link rounded-0')}>{i.name}</Href>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    )
  }


export default withRouter(Accordion);
