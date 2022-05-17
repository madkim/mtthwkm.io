import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const footerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/home') {
      footerRef.current.style.opacity = 0
    }
  }, [location.pathname])

  return (
    <div
      ref={footerRef}
      id='footer'
      className='py-1 text-light text-center w-100 font-weight-light user-select-none'
    >
      <small>mtthwkm.io</small>
    </div>
  )
}
