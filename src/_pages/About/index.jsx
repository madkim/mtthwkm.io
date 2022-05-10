import React, { useEffect } from 'react'
import gsap from 'gsap'
import Timeline from './Components/Timeline'

import { Link } from 'react-router-dom'
import { animateAboutPage } from '../../_helpers/animation'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  useEffect(() => {
    animateAboutPage()
  }, [])

  const handleSelect = (selected) => {
    gsap.to('.about__choice', {
      ease: 'back',
      opacity: 0,
      duration: 1,
      y: 20
    })
    gsap.to(`.about__items :not(.${selected})`, {
      ease: 'back',
      opacity: 0,
      duration: 1,
      pointerEvents: 'none',
      y: 20
    })
    gsap.to(`.${selected}`, {
      ease: 'elastic',
      delay: 1,
      duration: 1,
      y: 0,
      cursor: 'pointer',
      color: 'yellow',
      listStyleType: 'disc'
    })
    gsap.to(`#${selected}`, {
      ease: 'power',
      display: 'block',
      delay: 2,
      duration: 1,
      opacity: 1
    })
    gsap.to('.about__restart', {
      ease: 'power',
      delay: 3,
      opacity: 1,
      duration: 1
    })
  }

  return (
    <Container
      id='about'
      className='d-flex flex-column justify-content-center align-items-center text-light'
    >
      <br />
      <Row>
        <Col>
          <small
            onClick={() => window.location.reload()}
            className='about__restart'
          >
            start over
          </small>
          <h1>
            <div className='about__choice user-select-none'>You want to:</div>
            <ul className='about__items'>
              <li
                onClick={() => handleSelect('about__short')}
                className='about__item about__short'
              >
                hear a little bit about me
              </li>
              <br />
              <li
                onClick={() => handleSelect('about__long')}
                className='about__item about__long'
              >
                read my life story
              </li>
              <br />
              <li
                onClick={() => handleSelect('about__timeline')}
                className='about__item about__timeline'
              >
                see a cool timeline
              </li>
            </ul>
          </h1>
        </Col>
      </Row>
      <br />

      <div id='about__short' className='container lead'>
        <p>
          Hi <i className='fa-solid fa-hand-wave'></i> I'm so glad you made it.{' '}
        </p>
        <br />
        <p>
          My name is Matthew Kim and I was born and raised in Redlands
          California.
        </p>
        <br />
        <p>
          In 2017 I graduated from the University of California Santa Cruz with
          a bachelors degree in Computer Science.{' '}
        </p>
        <br />
        <p>
          For work I build web applications and websites ( like this one! ) in
          Javascript and React.js. I love design and making things feel good!
          There's a joy in taking an idea and molding it into something real
          that people can use and interact with. Often times I find myself
          thinking of little things. For better or worse, small details add up
          and whether or not others explicitly notice, they will feel it.{' '}
        </p>
        <br />
        <p>
          In my free time you can find me enjoying the great outdoors. I'm an
          avid music listener, coffee drinker, art appreciator, and rock
          climber. My favorite color is orange and I'm a father of 2 cats and a
          dog, all of which I love equally in their own way.{' '}
        </p>
        <br />
        <p>
          Now you know a little bit about me!{' '}
          <Link to='/contact' className='text-decoration-none'>
            Tell me about yourself!
          </Link>
        </p>
        <br />
      </div>

      <div id='about__long' className='container lead'>
        <p>
          Hi <i className='fa-solid fa-hand-wave'></i> I'm so glad you made it.{' '}
        </p>
        <br />
        <p>
          My name is Matthew Kim and I was born and raised in Redlands
          California.
        </p>
        <br />
        <p>
          Growing up I always found myself comfortable with computers. My
          grandparents use to tell me as a child I always knew what to do when
          it came to helping them troubleshoot issues (much like most
          grandkids!). I suppose I never thought much about it but thinking back
          it probably did affect me pursuing a career in computer science.{' '}
        </p>
        <br />
        <p>
          A big part of getting into computers came from video games. As a kid,
          I was blessed with a Super Nintendo which altered my life forever. I
          remember spending hours playing games like Legend of Zelda, Street
          Fighter and Contra. Eventually I upgraded to a PS2 and ultimately
          ended up playing a lot of computer games. All this informed my love of
          computers and the virtual worlds that could be explored within them.{' '}
        </p>
        <br />
        <p>
          As it was time to go off to college I got my first MacBook. I had
          played piano since I was a child and picked up drums throughout
          high-school, yet I think my real musical journey started with my first
          MacBook. I taught myself the music software Logic and Ableton and ever
          since then I've enjoyed producing music in my spare time.{' '}
        </p>
        <br />
        <p>
          In my first year of college, I remember not knowing what to do and
          being quite confused. I had a good friend who was taking an intro
          computer science course and seeing him write code which was
          immediately output to the screen was something that peaked my
          interest. The following quarter I enrolled in the intro to java course
          and the rest was history.{' '}
        </p>
        <br />
        <p>
          After graduating I spent some time soul searching and trying to find
          what I wanted to do. Being a new grad was scary and definitely
          challenged me. I found myself in an intense bout of imposter syndrome,
          something I didn't fully understand until I experiencing it. Luckily
          it just takes one person to give you a chance. In 2018 I worked at a
          small research facility that needed a full-stack developer to take
          over a project which handled patient records (similar to the EPIC
          system but much smaller scale). I gained insight into the inner
          workings of how a web application works from front to back. I owe a
          lot to being able to have that opportunity and enjoyed the position
          very much.
        </p>
        <br />
        <p>
          As with all things, at some point, they must come to an end. At the
          end of 2019 the facility I worked for was absorbed. It took a lot of
          thinking but I decided it was time for me to move on to bigger and
          better things! I finished my work, packed my bags and moved up to
          Sacramento, CA to live with my long time partner. During this time I
          picked up some odd jobs here and there, from helping a family friend
          with a website to working at a rock climbing gym. All of which came to
          a halt when the pandemic hit.{' '}
        </p>
        <br />
        <p>
          I spent most of the pandemic isolating and feeling isolated. It was
          scary and is still something that we are dealing with in our day to
          day. In July of 2020, I became very sick. I moved back
          home to Redlands, CA where I spent much of the remainder of the year
          recovering. It has been a difficult road to recovery, thankfully as of
          late I am fully recovered and healthy. With all the life changes that
          2020 brought, not all were negative. Nov 2020, on Thanksgiving, I
          received an offer of employment for AxS Health, a telemedicine start
          up that I had been interested in since around the time I graduated.{' '}
        </p>
        <br />
        <p>
          Working for AxS Health, I've been able to hone my font end development skills 
          and look forward to the opportunities to continue my growth as a developer. 
        </p>
        <br />
      </div>

      <div id='about__timeline' className='container lead'>
        <Timeline />
      </div>
    </Container>
  )
}
