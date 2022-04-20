import React, { useEffect } from 'react'
import { animateAboutPage } from '../../_helpers/animation'
import { Container, Row, Col } from 'react-bootstrap'

import gsap from 'gsap'

export default function About() {
  useEffect(() => {
    animateAboutPage()
  }, [])

  const handleSelect = (selected) => {
    gsap.to(".about__choice", {
      ease: "back",
      opacity: 0,
      duration: 1,
      y: 20
    });
    gsap.to(`.about__items :not(${selected})`, {
      ease: "back",
      opacity: 0,
      duration: 1,
      pointerEvents: 'none',
      y: 20,
    });
    gsap.to(selected, {
      ease: "elastic",
      delay: 1,
      duration: 1,
      y: 0,
      cursor: 'pointer',
      color: 'yellow',
      listStyleType: 'disc',
    });
  }

  return (
    <Container id="about" className='d-flex justify-content-center align-items-center'>
      <br />
      <Row className='text-light'>
        <Col>
          <h1>
            <div className='about__choice user-select-none'>You want to:</div>
            <ul className='about__items'>
              <li 
                onClick={() => handleSelect('.about__item--1')} 
                className='about__item about__item--1'>hear a little bit about me</li>
              <br />
              <li 
                onClick={() => handleSelect('.about__item--2')} 
                className='about__item about__item--2'>read my life story</li>
              <br />
              <li 
                onClick={() => handleSelect('.about__item--3')} 
                className='about__item about__item--3'>see a timeline</li>
            </ul>
          </h1>
        </Col>
      </Row>
    </Container>
  )
}
