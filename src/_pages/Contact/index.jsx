import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Navbar from '../../_components/Navbar'
import Button from '@mui/material/Button'

import { TextField } from '@mui/material'
import { sendContactEmail } from '../../_services/contact.service'
import { animateContactPage } from '../../_helpers/animation'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

export default function Contact() {
  useEffect(() => {
    animateContactPage()
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [details, setDetails] = useState('')
  const [sending, setSending] = useState(false)

  const isValidEmail = (email) => {
    const emailRequirements = /\S+@\S+\.\S+/
    return emailRequirements.test(email)
  }

  const handleClearForm = () => {
    setName('')
    setEmail('')
    setDetails('')
  }

  const handleContact = () => {
    setErrors({})
    const errors = {}

    if (name === '') {
      errors.name = 'Please enter a name.'
    }
    if (isValidEmail(email) === false) {
      errors.email = 'Please enter a valid email.'
    }
    if (email === '') {
      errors.email = 'Please enter an email.'
    }
    if (details === '') {
      errors.details = 'Please enter a message.'
    }

    if (Object.keys(errors).length === 0) {
      setSending(true)
      sendContactEmail(name, email, details)
        .then(function (response) {
          handleClearForm()
          Swal.fire({
            title: 'Your email was sent successfully!',
            text: "Thanks for contacting me, I will do my best to get back to you as soon as possible :)",
            icon: 'success',
            confirmButtonColor: '#218838',
            confirmButtonText: 'Great, thanks!'
          })
        })
        .catch(function (error) {
          Swal.fire({
            title: 'Something went wrong!',
            text: "Sorry about that, please try again :(",
            icon: 'error',
            confirmButtonColor: '#dc3741',
            confirmButtonText: 'Okay!'
          })
        })
        .then(() => {
            setSending(false)
        })
    } else {
      setErrors(errors)
    }
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
              <div className='contact__form rounded shadow'>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='formName'
                      label='name'
                      value={name}
                      error={Object.keys(errors).includes('name')}
                      variant='standard'
                      onChange={(e) => setName(e.target.value)}
                      helperText={errors.name}
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      id='formEmail'
                      label='email'
                      value={email}
                      error={Object.keys(errors).includes('email')}
                      variant='standard'
                      onChange={(e) => setEmail(e.target.value)}
                      helperText={errors.email}
                    />
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col>
                    <TextField
                      fullWidth
                      multiline
                      id='formDetails'
                      rows={4}
                      value={details}
                      label='lets talk'
                      error={Object.keys(errors).includes('details')}
                      variant='standard'
                      onChange={(e) => setDetails(e.target.value)}
                      helperText={errors.details}
                    />
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <Button
                      size='large'
                      variant='contained'
                      onClick={handleContact}
                      disabled={sending}
                      className='contact__btn'
                    >
                    { sending ? 
                      <Spinner size='sm' animation='border' variant='light'/> 
                      : 
                      <div>
                        <i className='fa-solid fa-hand-wave' />
                      </div>
                    }
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
