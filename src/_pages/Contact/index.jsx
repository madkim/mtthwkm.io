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
      <Container fluid className='pt-4'>
        <Row>
          <Col xs='12' className='text-end'>
            <Navbar />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='contact__form rounded'>
          <Row className='mt-4'>
            <Col lg={{ span: 8, offset: 2 }}>
              <div>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='standard-basic'
                      label='name'
                      variant='standard'
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='standard-basic'
                      label='email'
                      variant='standard'
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
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
                <Row className='mt-2'>
                  <Col>
                    <Button
                      size='large'
                      variant='contained'
                      className='contact__btn'
                    >
                      <i className='fa-solid fa-hand-wave'></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
