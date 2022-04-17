import React from 'react'
import { Container, Card, Button, Col, Row, Image } from 'react-bootstrap'

export default function Projects() {
  return (
    <Container id="projects">
      <br />
      <Row>
        <Col>
          <div id='project__cards' className='d-flex' style={{height: '55vh'}}>
            <div className='project__card'>
              <Image fluid src='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg' style={{borderRadius: '1.5em 1.5em 0 0'}} />
              <div className='project__card--details p-3'>
                <h5>Project</h5>
                <p className='lead'>This is the short detail about the project</p>
              </div>
            </div>

            <div className='project__card project__card--active' >
              <Image fluid src='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg' style={{borderRadius: '1.5em 1.5em 0 0'}} />
              <div className='project__card--details p-3'>
                <h5>Project</h5>
                <p className='lead'>This is the short detail about the project</p>
              </div>
            </div>

            <div className='project__card'>
              <Image fluid src='https://www.apple.com/newsroom/images/product/app-store/Apple_App-Study-Results_hero.jpg.landing-big_2x.jpg' style={{borderRadius: '1.5em 1.5em 0 0'}} />
              <div className='project__card--details p-3'>
                <h5>Project</h5>
                <p className='lead'>This is the short detail about the project</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className='d-flex justify-content-center'>
            <div className='project__arrow'>
              <i className="fa-thin fa-2xl fa-circle-arrow-left"></i>
            </div>
            <div className='project__arrow'>
              <i className="fa-thin fa-2xl fa-circle-arrow-right"></i>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Project Details */}
        </Col>
      </Row>
      </Container>
  )
}
