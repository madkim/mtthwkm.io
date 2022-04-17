import React, { useEffect, Fragment, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import gsap from 'gsap'
import classNames from 'classnames'

export default function Home() {
  const [showIcon, setShowIcon] = useState('')


  useEffect(() => {
   gsap.to(".title__1", { // selector text, Array, or object
      x: 100, // any properties (not limited to CSS)
      ease: "elastic",
      duration: 1.5, // seconds
      backgroundColor: "red", // camelCase
    });
   gsap.to(".title__2", { // selector text, Array, or object
      x: -100, // any properties (not limited to CSS)
      ease: "elastic",
      delay: .5,
      duration: 1.5, // seconds
      backgroundColor: "red", // camelCase
    });
   gsap.to(".title__3", { // selector text, Array, or object
      x: 100, // any properties (not limited to CSS)
      ease: "elastic",
      delay: 1,
      duration: 1.5, // seconds
      backgroundColor: "red", // camelCase
   });
    gsap.to(".home__navbar", { // selector text, Array, or object
      opacity: 1,
      ease: "power",
      delay: 2,
      duration: 1, // seconds
   });
    gsap.to(".home__scroll", { // selector text, Array, or object
      y: 50,
      opacity: 1,
      ease: "power",
      delay: 2,
      duration: 1, // seconds
   });
    gsap.to(".home__scroll", { // selector text, Array, or object
      y: 50,
      opacity: 1,
      ease: "power",
      delay: 2,
      duration: 1, // seconds
   });
    gsap.to(".home__scroll", { // selector text, Array, or object
      y: 30,
      ease: "linear",
      delay: 3,
      duration: 1, // seconds
      yoyo: true,
      repeat: -1
   });
  }, [])

  const handleScroll = () => {
    document.getElementById('home__details').scrollIntoView()
  }
  
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

  return (
    <Fragment>
      <Container id="home">
        <Row className='home__navbar justify-content-end'>
          <Col xs='auto'>
            <div   
              onMouseEnter={() => setShowIcon('about')}
              onMouseLeave={() => setShowIcon('')}
              className='home__navbar--item cursor-pointer'
            >
              about 
            </div>
            <div   
              onMouseEnter={() => setShowIcon('work')}
              onMouseLeave={() => setShowIcon('')}
              className='home__navbar--item cursor-pointer'
            >
              work 
            </div>
            <div   
              onMouseEnter={() => setShowIcon('projects')}
              onMouseLeave={() => setShowIcon('')}
              className='home__navbar--item cursor-pointer'
            >
              projects 
            </div>
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
          </Col>
        </Row>

        <Row className='mt-5 home__title title__1'>
          <Col>
            this is a
          </Col>
        </Row>

        <Row className='mt-5 home__title title__2'>
          <Col>
            design 
          </Col>
        </Row>

        <Row className='mt-5 home__title title__3'>
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
