import React, { useEffect, useState } from 'react'
import ProjectCard from './Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

export default function Projects() {
  const [selected, setSelected] = useState('active')

  useEffect(() => {
    //observe
  }, [])

  const handleSelect = () => {
    setSelected('show')
  }

  return (
    <div id="projects">
      <br />
      <div id='project__cards' className='d-flex'>
        <ProjectCard
          select={handleSelect} 
          status='first' 
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          status={selected}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect}
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
        <ProjectCard
          select={handleSelect} 
          status='last' 
          image='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg'
        />
      </div>
    
      <div id='project__arrows'>
        <div className='project__arrow'>
          <i className="fa-thin fa-2xl fa-circle-arrow-left"></i>
        </div>
        <div className='project__arrow'>
          <i className="fa-thin fa-2xl fa-circle-arrow-right"></i>
        </div>
      </div>
      <br />

      <Row>
        <Col>
          {/* Project Details */}
          <div id='project__details' className='text-'>
            <h1>This is the details area</h1>
          </div>
        </Col>
      </Row>
      </div>
  )
}
