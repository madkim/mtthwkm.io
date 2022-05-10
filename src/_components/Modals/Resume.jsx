import React, { useState } from 'react'
import ResumePDF from '../../_assets/Resume.pdf'

import { pdfjs } from 'react-pdf';
import { Document, Page } from "react-pdf";
import { Button, Modal, Spinner } from 'react-bootstrap'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export default function ResumeModal({ show, handleClose }) {
  const [loading, setLoading] = useState(true)

  const onDocumentLoadSuccess = () => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  return (
    <Modal size='xl' fullscreen centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex flex-column justify-content-center align-items-center container'>
        <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          {/* {loading ?  */}
            <Spinner animation='border'/>
            {/* :
            <Page pageNumber={1} />
          } */}
        </Document>
      </Modal.Body>
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
