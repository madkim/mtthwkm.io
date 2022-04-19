import React, { useEffect, Fragment, useState, useRef } from 'react'
import JTreeImg from '../../_assets/jtree.jpg'

import { animateHomePage } from '../../_helpers/animation'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Navbar from '../../_components/Navbar'

export default function Home() {
  const homeDetailsRef = useRef(null)
  const [index, setIndex] = useState(0)

  const nameArray = [
    'designer',
    'developer',
    'rock climber',
    'programmer',
    'musician',
    'lover',
    'coffee drinker',
    'thinker',
    'D R E A M E R',
  ]

  useEffect(() => {
    setTimeout(() => {
      const newIndex = index + 1 
      setIndex(newIndex % nameArray.length)
    }, 2000);
  }, [index])
  

  useEffect(() => {
   animateHomePage()
  }, [])

  const handleScroll = () => {
    homeDetailsRef.current.scrollIntoView()
  }

  return (
    <Fragment>
      <Container id="home" fluid>
      <Row style={{position: 'fixed', right: 0}}>
        <Col>
          <Navbar />
        </Col>
      </Row>
        <Row className='home__title home__title--2'>
          <Col className='d-flex align-items-center justify-content-center user-select-none'>
              {nameArray[index]}
          </Col>
        </Row>
        
        <Row className='home__scroll'>
          <Col xs='auto'>
            <div onClick={handleScroll} className='home__scroll--text'>
              scroll down <i className="fa-solid fa-hand-point-down"></i>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home__parallax--1"></div>

      <Container>
        <div id='home__details'>
          <div ref={homeDetailsRef} className='text-center'>
            <div className='mt-5'>
              <Image height={300} width={'100%'} src={JTreeImg}   style={{objectFit: 'cover'}}/>
              <div className=' m-5  d-flex justify-content-center flex-row'>
                <div className='text-center'>
                  <p>Hello! I'm Matt <br />  Welcome to my website</p>
                  <div>
                    <p>I'm
                        <br />
                        a climber 
                        <br /> 
                        a music maker 
                        <br /> 
                        a Front End developer
                        <br /> 
                        an outdoor enthusiast 
                        <br /> 
                        a lover of all things coffee </p>
                  </div>
                  <p>Please feel free to look around and enjoy your stay</p> 
                  <p>I'm happy you're here</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="home__parallax--2"></div>
    </Fragment>
  )
}
