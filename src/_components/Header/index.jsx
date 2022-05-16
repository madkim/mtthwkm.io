import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function Header() {
  const headerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/home') {
      headerRef.current.style.opacity = 0
    }
  }, [location.pathname])

  return (
      <div ref={headerRef} id='header__icons'>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id={`tooltip-bottom`}>Github</Tooltip>}
        >
          <a
            rel='noopener noreferrer'
            href='https://github.com/madkim'
            target='_blank'
            className='header__icon px-3'
          >
            <i className='fab fa-github'></i>
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id={`tooltip-bottom`}>LinkedIn</Tooltip>}
        >
          <a
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/mtthwkm/'
            target='_blank'
            className='header__icon'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement='bottom'
          overlay={<Tooltip id={`tooltip-bottom`}>Resume</Tooltip>}
        >
        <Link to='/resume' className='text-decoration-none'>
          <div className='header__icon px-3'>
            <i className="fal fa-file-alt"></i>
          </div>
        </Link>
        </OverlayTrigger>
      </div>
  )
}
