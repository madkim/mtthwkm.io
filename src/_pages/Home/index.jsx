import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import gsap from 'gsap'

export default function Home() {
  useEffect(() => {
   gsap.to(".title__1", { // selector text, Array, or object
      x: 100, // any properties (not limited to CSS)
      ease: "power",
      duration: 1, // seconds
      backgroundColor: "red", // camelCase
    });
   gsap.to(".title__2", { // selector text, Array, or object
      x: -100, // any properties (not limited to CSS)
      ease: "power",
      delay: .5,
      duration: 1, // seconds
      backgroundColor: "red", // camelCase
    });
   gsap.to(".title__3", { // selector text, Array, or object
      x: 100, // any properties (not limited to CSS)
      ease: "power",
      delay: 1,
      duration: 1, // seconds
      backgroundColor: "red", // camelCase
    });
  }, [])
  

  return (
    <Container id="home">
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
    </Container>
  )
}
