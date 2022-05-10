import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './style.css'

export default function SideMenu() {
  const location = useLocation()

  function closeNav() {
    document.getElementById('mySidepanel').style.right = '-20em'
  }

  return (
    <div id='mySidepanel' className='sidepanel fw-light' onClick={() => closeNav()}>
      <div className='text-center mb-4'>
        {/* <img src={Logo} alt='AxS Health Logo' height='120' /> */}
      </div>

      <div className='sidepanel__container text-start'>
        <div>
          <Row>
            <Col xs={{offset: 3}} className='text-white '>MENU</Col>
          </Row>

          <Link
            to='/home'
            onClick={() => closeNav()}
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
            onClick={() => closeNav()}
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
            onClick={() => closeNav()}
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
            onClick={() => closeNav()}
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
            onClick={() => closeNav()}
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
    </div>
  )
}
