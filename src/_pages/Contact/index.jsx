import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Navbar from '../../_components/Navbar'

import { TextField } from '@mui/material'
import { Container, Row, Col } from 'react-bootstrap'
import { animateContactPage } from '../../_helpers/animation'

export default function Contact() {
  useEffect(() => {
    animateContactPage()
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')

  const handleContact = () => {
    console.log('name', name)
    console.log('email', email)
    console.log('details', details)
  }

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
        <div>
          <Row className='mt-4'>
            <Col lg={{ span: 8, offset: 2 }}>
              <div className='contact__form rounded'>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='standard-basic'
                      label='name'
                      value={name}
                      variant='standard'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='standard-basic'
                      label='email'
                      value={email}
                      variant='standard'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      value={details}
                      label='lets talk'
                      variant='standard'
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <Button
                      size='large'
                      variant='contained'
                      onClick={handleContact}
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
