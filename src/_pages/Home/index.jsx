import React, { useEffect, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import gsap from 'gsap'

export default function Home() {
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
  

  return (
    <Fragment>
      <Container id="home">
        <Row className='home__navbar justify-content-end'>
          <Col xs='auto'>
            <div className='home__navbar--item cursor-pointer'>
              about <i className="show-on-hover fa-light fa-block-question"></i>
            </div>
            <div className='home__navbar--item cursor-pointer'>
              work <i className="show-on-hover fa-light fa-code"></i>
            </div>
            <div className='home__navbar--item cursor-pointer'>
              projects <i className="show-on-hover fa-light fa-rocket-launch"></i>
            </div>
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
            <div className='home__scroll--text text-light'>
              scroll down <i className="fa-solid fa-hand-point-down"></i>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home__parallax"></div>

      <div style={{height: '150vh', color: 'white', backgroundColor: 'black', fontSize: '36px'}}>
        This is some info that I can write stuff on blah blah
      </div>
      
      <div className="home__parallax"></div>
    </Fragment>
  )
}
