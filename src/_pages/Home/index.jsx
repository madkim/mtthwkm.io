import React, { useEffect, Fragment } from 'react'
import { animateHomePage } from '../../_helpers/animation'
import { Container, Row, Col } from 'react-bootstrap'

import Navbar from './Components/Navbar'

export default function Home() {

  useEffect(() => {
   animateHomePage()
  }, [])

  const handleScroll = () => {
    document.getElementById('home__details').scrollIntoView()
  }

  return (
    <Fragment>
      <Container id="home">
        <Navbar />

        <Row className='mt-5 home__title home__title--1'>
          <Col>
            this is a
          </Col>
        </Row>
        <Row className='mt-5 home__title home__title--2'>
          <Col>
            design 
          </Col>
        </Row>
        <Row className='mt-5 home__title home__title--3'>
          <Col>
            website
          </Col>
        </Row>
        
        <Row className='home__scroll'>
          <Col xs='auto'>
            <div onClick={handleScroll} className='home__scroll--text text-light'>
              scroll down <i className="fa-solid fa-hand-point-down"></i>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home__parallax"></div>

      <div id='home__details'>
        This is some info that I can write stuff on blah blah
      </div>
      
      <div className="home__parallax"></div>
    </Fragment>
  )
}
