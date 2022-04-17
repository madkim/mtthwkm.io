import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'

export default function Projects() {
  return (
    <Container id="projects">
      <br />
      <Row>
        <Col>
          <div id='project__cards' className='d-flex' style={{height: '55vh'}}>
            <div className='project__card'>
              Project
            </div>
            <div className='project__card' >
              Project
            </div>
            <div className='project__card'>
              Project
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
