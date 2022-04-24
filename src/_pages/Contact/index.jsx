import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Navbar from '../../_components/Navbar'

import { TextField } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { animateContactPage } from '../../_helpers/animation'

export default function Contact() {
  useEffect(() => {
    animateContactPage()
  }, [])

  return (
    <div id='contact'>
      <br />
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Container className='contact__form'>
        <br />
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div>
              <Row>
                <Col>
                  <TextField
                    fullWidth
                    id='standard-basic'
                    label='name'
                    variant='standard'
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <TextField
                    fullWidth
                    id='standard-basic'
                    label='email'
                    variant='standard'
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label='lets talk'
                    variant='standard'
                  />
                </Col>
              </Row>
              <br />
              <Row className='mt-2'>
                <Col>
                  <Button
                    size='large'
                    variant='contained'
                    style={{
                      background: 'forestgreen',
                      padding: '1em',
                      width: '200px'
                    }}
                  >
                    <i className='fa-solid fa-hand-wave'></i>
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
