import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import history from '../../_helpers/history'
import classNames from 'classnames'

export default function Navbar() {
  const [active, setActive] = useState(history.location.pathname)

  useEffect(() => {
    setActive(history.location.pathname)
  }, [history.location.pathname])

  const showIcon = (page) => {
    return active === page ? 'opacity-100' :'opacity-0' 
  }

  const pageActive = (page) => {
    return classNames('navbar--item', {
      'navbar--active': active === page
    })
  }

  return (
    <Row className='navbar justify-content-end'>
      <Col xs='auto'>
        <Link to="/home" className='text-decoration-none'>
          <div 
            className={pageActive('/home')}
            onMouseEnter={() => setActive('/home')}
            onMouseLeave={() => setActive(history.location.pathname)}
          >
            home
          </div>
        </Link>
        <Link to="/about" className='text-decoration-none'>
          <div 
            className={pageActive('/about')}
            onMouseEnter={() => setActive('/about')}
            onMouseLeave={() => setActive(history.location.pathname)}
          >
            about
          </div>
        </Link>
        <Link to="/work" className='text-decoration-none'>
          <div 
            className={pageActive('/work')}
            onMouseEnter={() => setActive('/work')}
            onMouseLeave={() => setActive(history.location.pathname)}
          >
            work
          </div>
        </Link>
        <Link to="/projects" className='text-decoration-none'>
          <div 
            className={pageActive('/projects')}
            onMouseEnter={() => setActive('/projects')}
            onMouseLeave={() => setActive(history.location.pathname)}
          >
            projects
          </div>
        </Link>
        <Link to="/contact" className='text-decoration-none'>
          <div 
            className={pageActive('/contact')}
            onMouseEnter={() => setActive('/contact')}
            onMouseLeave={() => setActive(history.location.pathname)}
          >
            contact
          </div>
        </Link>
      </Col>
      <Col xs='1' style={{width: '1px'}}>
        <Row>
          <Col className={showIcon("/home")}>
            <i class="navbar--icon fa-light fa-alien-8bit"></i>
          </Col>
        </Row>
        <Row>
          <Col className={showIcon("/about")}>
            <i className='navbar--icon fa-light fa-block-question'></i>
          </Col>
        </Row>
        <Row>
          <Col className={showIcon("/work")}>
            <i className='navbar--icon fa-light fa-code'></i>
          </Col>
        </Row>
        <Row>
          <Col className={showIcon("/projects")}>
            <i className='navbar--icon fa-light fa-rocket-launch'></i>
          </Col>
        </Row>
        <Row>
          <Col className={showIcon("/contact")}>
            <i className='navbar--icon fa-light fa-hand-wave'></i>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
