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
    gsap.to(`.about__items :not(.${selected})`, {
      ease: "back",
      opacity: 0,
      duration: 1,
      pointerEvents: 'none',
      y: 20,
    });
    gsap.to(`.${selected}`, {
      ease: "elastic",
      delay: 1,
      duration: 1,
      y: 0,
      cursor: 'pointer',
      color: 'yellow',
      listStyleType: 'disc',
    });
    gsap.to(`#${selected}`, {
      ease: "power",
      display: 'block',
      delay: 2,
      duration: 1,
      opacity: 1
    });
  }

  return (
    <Container id="about" className='d-flex flex-column justify-content-center align-items-center text-light'>
      <br />
      <Row>
        <Col>
          <h1>
            <div className='about__choice user-select-none'>You want to:</div>
            <ul className='about__items'>
              <li 
                onClick={() => handleSelect('about__short')} 
                className='about__item about__short'>hear a little bit about me</li>
              <br />
              <li 
                onClick={() => handleSelect('about__long')} 
                className='about__item about__long'>read my life story</li>
              <br />
              <li 
                onClick={() => handleSelect('about__timeline')} 
                className='about__item about__timeline'>see a timeline</li>
            </ul>
          </h1>
        </Col>
      </Row>
      <br />

      <div id='about__short' className='container lead'>
        <p>Hi (wave) I'm so glad you made it. Here's a little more info about me! My name is Matthew Kim and I was born and raised in Redlands California.</p>
        <p>In 2017 I graduated from the University of California Santa Cruz with a bachelors degree in Computer Science. </p>
        <p>For work I build web applications and websites (like this one!) in Javascript and React.js. I love design and making things feel good! There's a joy in taking an idea and molding it into something real that people can use and interact with. Often times I find myself thinking of little things. For better or worse, small details add up and whether or not others explicitly notice, they will feel it. </p>
        <p>In my free time you can find me enjoying the great outdoors. I'm an avid music listener, coffee drinker, art appreciator, and rock climber. My favorite color is orange and I'm a father of 2 cats and a dog, all of which I love equally in their own way. </p>
        <p>Now you know a little bit about me! Tell me about yourself! (Link to contact page)</p>
      </div>

      <div id='about__long' className='container lead'>
        <p>Hi (wave) I'm so glad you made it. Here's a little more info about me! My name is Matthew Kim and I was born and raised in Redlands California.</p>
        <p>In 2017 I graduated from the University of California Santa Cruz with a bachelors degree in Computer Science. </p>
        <p>For work I build web applications and websites (like this one!) in Javascript and React.js. I love design and making things feel good! There's a joy in taking an idea and molding it into something real that people can use and interact with. Often times I find myself thinking of little things. For better or worse, small details add up and whether or not others explicitly notice, they will feel it. </p>
        <p>In my free time you can find me enjoying the great outdoors. I'm an avid music listener, coffee drinker, art appreciator, and rock climber. My favorite color is orange and I'm a father of 2 cats and a dog, all of which I love equally in their own way. </p>
        <p>Now you know a little bit about me! Tell me about yourself! (Link to contact page)</p>
      </div>

      <div id='about__timeline' className='container lead'>
        <h1>this is the timeline</h1>
      </div>
    </Container>
  )
}
