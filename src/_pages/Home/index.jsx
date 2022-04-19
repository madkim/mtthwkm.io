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
            <Image height={500} width={500} src={JTreeImg} roundedCircle style={{objectFit: 'cover'}}/>
            <div className='lead mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id venenatis sapien. Praesent placerat mauris vel nunc iaculis lobortis. Donec vitae aliquam ipsum. Sed placerat consequat risus at posuere. Donec aliquet molestie euismod. Ut justo risus, pulvinar posuere scelerisque ut, aliquam nec purus. Praesent efficitur arcu lacus, in hendrerit nisl maximus sed. Sed nec metus at nulla viverra tincidunt eget quis ex. Vivamus feugiat lobortis mi id viverra. Aliquam euismod nisi ut ligula venenatis hendrerit. Etiam libero quam, sollicitudin ac viverra eu, auctor at justo. Vestibulum luctus consequat nisi vel dapibus. Vivamus id est pharetra, tincidunt nunc id, eleifend sapien.
              Aenean placerat, urna sit amet gravida semper, lectus lectus vestibulum felis, at euismod mauris magna nec sapien. Mauris sit amet magna eget arcu ornare vehicula non sit amet lorem. Morbi velit nunc, tincidunt in convallis sed, tempor non nibh. In convallis leo quis nisl porttitor varius. Vivamus eu orci pulvinar, congue erat et, vehicula nulla. Aliquam sollicitudin dolor ac eros faucibus, pellentesque maximus mi tempor. Morbi sollicitudin semper massa, sed vestibulum magna cursus ut. In quam neque, eleifend non suscipit vel, posuere vel quam. Proin ultricies vehicula diam.
              Donec placerat nisl et vestibulum ullamcorper. Morbi in lacus a arcu efficitur consequat id a ante. Duis sed luctus nunc. Phasellus eu sem iaculis mauris venenatis ultricies id eget magna. Aliquam vitae turpis ac arcu mollis aliquam ut nec enim. Curabitur congue orci lacus, ut molestie augue ornare id. Nam id neque vitae quam euismod iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas rutrum, neque vitae efficitur consectetur, massa diam ultricies ligula, ac dapibus ante leo quis massa. Nullam vitae hendrerit sem. Donec accumsan ullamcorper fringilla. Ut diam nibh, auctor iaculis semper eu, ornare eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a dictum nisl, quis gravida diam. Vivamus semper urna ut nulla finibus tempor.
            </div>
          </div>
        </div>
      </Container>
      
      <div className="home__parallax--2"></div>
    </Fragment>
  )
}
