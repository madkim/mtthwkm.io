import React, { useState, useEffect, useRef, Fragment } from 'react'
import SideMenu from '../SideMenu'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { Row, Col, Nav, Navbar as ReactNavbar, Button } from 'react-bootstrap'

export default function Navbar() {
  const navRef = useRef(null)
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  useEffect(() => {
    if (location.pathname === '/home') {
      navRef.current.style.opacity = 0
    }
    setActive(location.pathname)
  }, [location.pathname])

  const showIcon = (page) => {
    return active === page ? 'opacity-100' : 'opacity-0'
  }

  const openNav = () => {
    document.getElementById('mySidepanel').style.right = '0em'
  }

  const pageActive = (page) => {
    return classNames('navbar--item', {
      'navbar--active': active === page
    })
  }

  return (
    <Fragment>
      <ReactNavbar id='navbar' className='py-0 pl-0 d-lg-none py-2' expand='lg'>
        <SideMenu />
        <Nav className='hamburger-menu mr-auto' onClick={(e) => openNav()}>
          <Button className='shadow-lg' style={{background: 'black', border: 'none', }}>
            <i className='fal fa-bars' style={{ fontSize: '2em', color: 'none' }}/>
          </Button>
        </Nav>
      </ReactNavbar>

      <Row ref={navRef} className='navbar justify-content-end d-none d-lg-inline-flex'>
        <Col xs='auto'>
          <Link to='/home' className='text-decoration-none'>
            <div
              className={pageActive('/home')}
              onMouseEnter={() => setActive('/home')}
              onMouseLeave={() => setActive(location.pathname)}
            >
              home
            </div>
          </Link>
          <Link to='/about' className='text-decoration-none'>
            <div
              className={pageActive('/about')}
              onMouseEnter={() => setActive('/about')}
              onMouseLeave={() => setActive(location.pathname)}
            >
              about
            </div>
          </Link>
          <Link to='/work' className='text-decoration-none'>
            <div
              className={pageActive('/work')}
              onMouseEnter={() => setActive('/work')}
              onMouseLeave={() => setActive(location.pathname)}
            >
              work
            </div>
          </Link>
          <Link to='/projects' className='text-decoration-none'>
            <div
              className={pageActive('/projects')}
              onMouseEnter={() => setActive('/projects')}
              onMouseLeave={() => setActive(location.pathname)}
            >
              projects
            </div>
          </Link>
          <Link to='/contact' className='text-decoration-none'>
            <div
              className={pageActive('/contact')}
              onMouseEnter={() => setActive('/contact')}
              onMouseLeave={() => setActive(location.pathname)}
            >
              contact
            </div>
          </Link>
        </Col>
        <Col xs='1' style={{ width: '1px' }}>
          <Row>
            <Col className={showIcon('/home')}>
              <i className='navbar--icon fa-light fa-cloud-sun'></i>
            </Col>
          </Row>
          <Row>
            <Col className={showIcon('/about')}>
              <i className='navbar--icon fa-light fa-face-smile'></i>
            </Col>
          </Row>
          <Row>
            <Col className={showIcon('/work')}>
              <i className='navbar--icon fa-light fa-code'></i>
            </Col>
          </Row>
          <Row>
            <Col className={showIcon('/projects')}>
              <i className='navbar--icon fa-light fa-rocket-launch'></i>
            </Col>
          </Row>
          <Row>
            <Col className={showIcon('/contact')}>
              <i className='navbar--icon fa-light fa-hand-wave'></i>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )

}
