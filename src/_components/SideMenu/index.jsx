import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Offcanvas, Row, Col, Button } from 'react-bootstrap'

import './style.css'

export default function SideMenu({ show, handleClose }) {
  const location = useLocation()

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end' style={{width: '250px', background: 'black'}}>
      <Offcanvas.Header className='justify-content-end pt-4 pr-4' closeButton closeVariant='white'></Offcanvas.Header>
      <Offcanvas.Body className='pt-0'>
        <div id='mySidepanel' className='sidepanel fw-light' onClick={handleClose} >
          <div className='sidepanel__container text-start'>
            <div>
              <Link
                to='/home'
                onClick={handleClose}
                className={`mt-1 font-weight-light ${
                  location.pathname.indexOf('/home') === 0 ? 'sidepanel-active' : ''
                }`}
              >
                <Row>
                  <Col xs='2'>
                    <i className='fa-light fa-cloud-sun'></i>
                  </Col>
                  <Col>Home</Col>
                </Row>
              </Link>
              <Link
                to='/about'
                onClick={handleClose}
                className={`mt-2 font-weight-light ${
                  location.pathname.indexOf('/about') === 0 ? 'sidepanel-active' : ''
                }`}
              >
                <Row>
                  <Col xs='2'>
                    <i className='fa-light fa-face-smile'></i>
                  </Col>
                  <Col>About</Col>
                </Row>
              </Link>
              <Link
                to='/work'
                onClick={handleClose}
                className={`mt-2 font-weight-light ${
                  location.pathname.indexOf('/work') === 0 ? 'sidepanel-active' : ''
                }`}
              >
                <Row>
                  <Col xs='2'>
                    <i className='fa-light fa-code'></i>
                  </Col>
                  <Col>Work</Col>
                </Row>
              </Link>
              <Link
                to='/projects'
                onClick={handleClose}
                className={`mt-2 font-weight-light ${
                  location.pathname.indexOf('/projects') === 0 ? 'sidepanel-active' : ''
                }`}
              >
                <Row>
                  <Col xs='2'>
                    <i className='fa-light fa-rocket-launch'></i>
                  </Col>
                  <Col>Projects</Col>
                </Row>
              </Link>
              <Link
                to='/contact'
                onClick={handleClose}
                className={`mt-2 font-weight-light ${
                  location.pathname.indexOf('/contact') === 0 ? 'sidepanel-active' : ''
                }`}
              >
                <Row>
                  <Col xs='2'>
                    <i className='fa-light fa-hand-wave'></i>
                  </Col>
                  <Col>Contact</Col>
                </Row>
              </Link>
            </div>
          </div>
          <div>
            <Row className='mb-4'>
              <Col xs='3'>
                <a
                  rel='noopener noreferrer'
                  href='https://github.com/madkim'
                  target='_blank'
                  className='header__icon'
                >
                  <Button className='rounded-pill' variant='outline-dark' style={{color: '#818181'}}>
                    <i className='fab fa-github'></i>
                  </Button>
                </a>
              </Col>
              <Col xs='3'>
                <a
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/mtthwkm/'
                  target='_blank'
                  className='header__icon'
                >
                  <Button className='rounded-pill' variant='outline-dark' style={{color: '#818181'}}>  
                    <i className='fab fa-linkedin'></i>
                  </Button>
                </a>
              </Col>
              <Col xs='3'>
                <Link to='/resume' className='text-decoration-none'>
                  <Button className='rounded-pill' variant='outline-dark' style={{color: '#818181'}}>  
                    <i className="fal fa-file-alt"></i>
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
