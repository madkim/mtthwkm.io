import React, { useEffect, Fragment, useState, useRef } from 'react'
import Header from '../../_components/Header'
import Navbar from '../../_components/Navbar'
import JTreeImg from '../../_assets/jtree.jpg'
import BishopImg from '../../_assets/bishop3.JPG'
import { animateHomePage } from '../../_helpers/animation'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Home() {
  const imgOneRef = useRef(null)
  const imgTwoRef = useRef(null)
  const homeDetailsRef = useRef(null)
  const homeDetailsBgRef = useRef(null)

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

  if (loading) {
    return null
  }

  return (
    <Fragment>
      <Container id='home' fluid>
        <div className='d-lg-flex d-none pt-4 text-dark' style={{ position: 'fixed' }}>
          <Header />
        </div>
        <div style={{ position: 'fixed', right: 10, zIndex: 99 }}>
          <br />
            <Navbar />
        </div>
        <Row className='home__title'>
          <Col className='d-flex align-items-center justify-content-center user-select-none'>
            {nameArray[index]}
          </Col>
        </Row>

        <Row className='home__scroll'>
          <Col xs='auto'>
            <div onClick={handleScroll} className='home__scroll--text'>
              scroll down <i className='fa-solid fa-hand-point-down'></i>
            </div>
          </Col>
        </Row>
      </Container>

      <div id='home__details--container'>
        <div ref={homeDetailsBgRef} className='home__details--background h-100'>
          <div
            ref={homeDetailsRef}
            className='text-center home__details mx-5'
          >
            <div
              ref={imgOneRef}
              style={{
                position: 'absolute',
                height: '1000px',
                width: '100%',
                background: 'black'
              }}
            >
              <Image
                height={300}
                width={'100%'}
                src={JTreeImg}
                style={{ objectFit: 'cover' }}
              />
              <div className=' m-5  d-flex justify-content-center flex-row'>
                <div className='text-center'>
                  <p>
                    Hello! I'm Matt <br /> Welcome to my website
                  </p>
                  <div>
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
                </div>
              </div>
            </div>
            <div
              ref={imgTwoRef}
              style={{
                position: 'sticky',
                height: '1000px',
                width: '100%',
                background: 'black'
              }}
            >
              <Image
                height={300}
                width={'100%'}
                src={BishopImg}
                style={{ objectFit: 'cover' }}
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
