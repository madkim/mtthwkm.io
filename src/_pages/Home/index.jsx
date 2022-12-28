import React, { useEffect, Fragment, useState, useRef } from 'react'
import gsap from 'gsap'
import Header from '../../_components/Header'
import Navbar from '../../_components/Navbar'
import JTreeImg from '../../_assets/jtree.jpg'
import BishopImg from '../../_assets/bishop3.JPG'

import { useNavigate } from 'react-router-dom'
import { animateHomePage } from '../../_helpers/animation'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {
  const imgOneRef = useRef(null)
  const imgTwoRef = useRef(null)
  const homeDetailsRef = useRef(null)
  const homeDetailsBgRef = useRef(null)
  
  const navigate = useNavigate(null)
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)

  const nameArray = [
    'designer',
    'developer',
    'rock climber',
    'programmer',
    'musician',
    'lover',
    'coffee drinker',
    'thinker',
    'D R E A M E R'
  ]

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0)
      setLoading(false)
      setTimeout(() => {
        animateHomePage()
      }, 200)
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const newIndex = index + 1
      setIndex(newIndex % nameArray.length)
    }, 2000)
  }, [index])

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (homeDetailsRef.current && homeDetailsBgRef.current) {
      homeDetailsRef.current.style.opacity = (offset - 1872) / 500
      homeDetailsBgRef.current.style.opacity = (offset - 1000) / 500
      imgTwoRef.current.style.opacity = (offset - 3000) / 500
    }
  }, [offset])

  const handleScroll = () => {
    const ref = homeDetailsRef.current.getBoundingClientRect()
    window.scroll(0, ref.top + 1800)
  }

  const handleContinue = () => {
    window.scroll(0, 3500)
  }

  const handleAbout = () => {
    gsap.to('#home__details--container', {
      ease: 'power',
      duration: 1.5,
      opacity: 0,
      onComplete: () => {
        navigate('/about')
      }
    })
  }

  if (loading) {
    return null
  }

  return (
    <Fragment>
      <Container id='home' fluid>
        <Row className='mt-4 d-lg-flex d-none header--container'>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className='mt-4 navbar--container'>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row className='home__title'>
          <Col className='d-flex align-items-center justify-content-center user-select-none'>
            {nameArray[index]}
          </Col>
        </Row>

        <Row className='home__scroll'>
          <Col xs='auto'>
            <div onClick={handleScroll} className='home__scroll--btn'>
              scroll down <i className='fa-solid fa-hand-point-down'></i>
            </div>
          </Col>
        </Row>
      </Container>

      <div id='home__details--container'>
        <div ref={homeDetailsBgRef} className='home__details--background h-100'>
          <div ref={homeDetailsRef} className='text-center home__details mx-5'>
            <div ref={imgOneRef} className='home__img--fade'>
              <Image
                width={'100%'}
                src={JTreeImg}
                style={{ objectFit: 'cover', height: '30vh' }}
              />
              <div className='m-5 d-flex justify-content-center flex-row'>
                <div className='text-center mb-4'>
                  <p>
                    Hello! I'm Matt <br /> Welcome to my website
                  </p>
                  <div className='mb-4'>
                    <p>
                      I'm
                      <br />
                      a climber
                      <br />
                      a music maker
                      <br />
                      a Front End developer
                      <br />
                      an outdoor enthusiast
                      <br />a lover of all things coffee{' '}
                    </p>
                  </div>
                  <div 
                    onClick={() => offset >= 3500 ? handleAbout() : handleContinue() } 
                    className='cursor-pointer home__continue--btn rounded-pill'
                  >
                    { offset >= 3500 ? 'about me' : 'continue'}
                  </div>
                </div>
              </div>
            </div>
            <div ref={imgTwoRef} className='home__img--fade-sticky' >
              <Image
                width={'100%'}
                src={BishopImg}
                style={{ objectFit: 'cover', height: '30vh' }}
              />
              <div className='m-5  d-flex justify-content-center flex-row'>
                <div className='text-center'>
                  <p>Please feel free to look around and enjoy your stay</p>
                  <p>I'm happy you're here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home__parallax--2'></div>
    </Fragment>
  )
}
