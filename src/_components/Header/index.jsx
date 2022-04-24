import React from 'react'

export default function Header() {
  return (
    <div id='header__icons'>
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
