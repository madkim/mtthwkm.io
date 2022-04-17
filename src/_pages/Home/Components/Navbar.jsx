import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import classNames from 'classnames'

export default function Navbar() {
  const [showIcon, setShowIcon] = useState('')

  const aboutIcon = classNames({
    'opacity-100' : showIcon === 'about',
    'opacity-0' : showIcon !== 'about',
  })
  
  const codeIcon = classNames({
    'opacity-100' : showIcon === 'work',
    'opacity-0' : showIcon !== 'work',
  })
  
  const rocketIcon = classNames({
    'opacity-100' : showIcon === 'projects',
    'opacity-0' : showIcon !== 'projects',
  })
  
  const contactIcon = classNames({
    'opacity-100' : showIcon === 'contact',
    'opacity-0' : showIcon !== 'contact',
  })

  return (
    <Row className='home__navbar justify-content-end'>
      <Col xs='auto'>
          <Link to="/about" className='text-decoration-none'>
            <div 
              className='home__navbar--item'
              onMouseEnter={() => setShowIcon('about')}
              onMouseLeave={() => setShowIcon('')}
            >
            about
            </div>
        </Link>
        <Link to="/work" className='text-decoration-none'>
            <div 
              className='home__navbar--item'
              onMouseEnter={() => setShowIcon('work')}
              onMouseLeave={() => setShowIcon('')}
            >
            work
            </div>
        </Link>
        <Link to="/projects" className='text-decoration-none'>
            <div 
              className='home__navbar--item'
              onMouseEnter={() => setShowIcon('projects')}
              onMouseLeave={() => setShowIcon('')}
            >
            projects
            </div>
        </Link>
        <Link to="/contact" className='text-decoration-none'>
            <div 
              className='home__navbar--item'
              onMouseEnter={() => setShowIcon('contact')}
              onMouseLeave={() => setShowIcon('')}
            >
            contact
            </div>
        </Link>
      </Col>
      <Col xs='1' style={{width: '1px'}}>
        <Row>
          <Col className={aboutIcon}>
            <i className='home__navbar--icon fa-light fa-block-question'></i>
          </Col>
        </Row>
        <Row>
          <Col className={codeIcon}>
            <i className='home__navbar--icon fa-light fa-code'></i>
          </Col>
        </Row>
        <Row>
          <Col className={rocketIcon}>
            <i className='home__navbar--icon fa-light fa-rocket-launch'></i>
          </Col>
        </Row>
        <Row>
          <Col className={contactIcon}>
            <i className='home__navbar--icon fa-light fa-hand-wave'></i>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
