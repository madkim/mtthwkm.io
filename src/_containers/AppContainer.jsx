import React, { useEffect } from 'react'
import { setFavicon } from '../_helpers/favicons'
import { useLocation } from 'react-router-dom'

export default function AppContainer(props) {
  const location = useLocation(null)
  useEffect(() => {
    setFavicon()
  }, [location])
  
  return (
    <>{props.children}</>
 );
}