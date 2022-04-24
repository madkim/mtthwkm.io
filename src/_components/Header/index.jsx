import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

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
      <a
        rel='noopener noreferrer'
        href='https://github.com/madkim'
        target='_blank'
        className='header__icon px-3'
      >
        <i className='fab fa-github'></i>
      </a>
      <a
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/mtthwkm/'
        target='_blank'
        className='header__icon'
      >
        <i className='fab fa-linkedin'></i>
      </a>
    </div>
  )
}
