import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ResumeModal({ show, handleClose }) {
  return (
    <Modal size='xl' fullscreen centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>
        <i className="fal fa-download"></i> &nbsp;Download
        </Button>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
