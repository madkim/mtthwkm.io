import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import ImageGallery from 'react-image-gallery';

// AXS
import Welcome from '../../_assets/axs/Shared/welcome-macbook@3x.png'
import MacbookForms from '../../_assets/axs/Shared/MacbookForms@3x.png'
import MacbookEvents from '../../_assets/axs/Shared/MacbookEvents@3x.png'
import MacbookMessages from '../../_assets/axs/Shared/MacbookMessages@3x.png'
import MacbookTelehealth from '../../_assets/axs/Shared/MacbookTelehealth@3x.png'
import DigitalRegistration from '../../_assets/axs/Shared/DigitalRegistration@3x.png'

// DARF
import Table from '../../_assets/darf/Table.png'
import Patient from '../../_assets/darf/Patient.png'
import Patient2 from '../../_assets/darf/Patient2.png'
import Patient3 from '../../_assets/darf/Patient3.png'
import Procedure from '../../_assets/darf/Procedure.png'
import Procedure2 from '../../_assets/darf/Procedure2.png'
import Procedure3 from '../../_assets/darf/Procedure3.png'
import ProcedureSearch from '../../_assets/darf/ProcedureSearch.png'
import ProcedureSearch2 from '../../_assets/darf/ProcedureSearch2.png'
import BarcodeScannerTutorial from '../../_assets/darf/BarcodeScannerTutorial.MP4'
import ChangePasswordTutorial from '../../_assets/darf/ChangePasswordTutorial.MP4'

import { animateWorkPage } from '../../_helpers/animation';
import { Row, Col, Nav, Tab } from 'react-bootstrap'

export default function Work() {
  useEffect(() => {
    window.scroll(0, 0)
    animateWorkPage()
  }, [])

  const axsImages = [
    {
      original: Welcome,
      thumbnail: Welcome,
      originalHeight: 500,
    },
    {
      original: MacbookForms,
      thumbnail: MacbookForms,
      originalHeight: 500,
    },
    {
      original: MacbookEvents,
      thumbnail: MacbookEvents,
      originalHeight: 500,
    },
    {
      original: MacbookMessages,
      thumbnail: MacbookMessages,
      originalHeight: 500,
    },
    {
      original: MacbookTelehealth,
      thumbnail: MacbookTelehealth,
      originalHeight: 500,
    },
    {
      original: DigitalRegistration,
      thumbnail: DigitalRegistration,
      thumbnailHeight: 50,
      originalHeight: 500,
      thumbnailClass: 'thumbnail__width mx-2'
    },
  ];

  const darfImages = [
    {
      original: Table,
      thumbnail: Table,
      originalHeight: 500,
    },
    {
      original: Patient,
      thumbnail: Patient,
      originalHeight: 500,
    },
    {
      original: Patient2,
      thumbnail: Patient2,
      originalHeight: 500,
    },
    {
      original: Patient3,
      thumbnail: Patient3,
      originalHeight: 500,
    },
    {
      original: Procedure,
      thumbnail: Procedure,
      originalHeight: 500,
    },
    {
      original: Procedure2,
      thumbnail: Procedure2,
      originalHeight: 500,
    },
    {
      original: Procedure3,
      thumbnail: Procedure3,
      originalHeight: 500,
    },
    {
      original: ProcedureSearch,
      thumbnail: ProcedureSearch,
      originalHeight: 500,
    },
    {
      original: ProcedureSearch2,
      thumbnail: ProcedureSearch2,
      originalHeight: 500,
    },
  ];
  
  return <div id='work'>
    <Row>
      <Col lg={{span: 8, offset: 2}} className='text-light'>
        <h1 className='fw-light text-center'>
          Front-End Developer 
          <div className='d-inline-block'>
            &nbsp;@&nbsp;
            <a
              rel='noopener noreferrer'
              href='https://www.axshealthapp.com/'
              target='_blank'
              style={{color: 'yellow'}}
            >
              AxS Health
            </a>
          </div>
        </h1>
        <div className='d-none d-sm-block'>
          <div className='d-flex flex-row justify-content-center mt-3 mb-2'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-react'></i> React&nbsp;&nbsp; </div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2020 - present</p>
          </div>
        </div>
        <div className='d-block d-sm-none mt-4'>
          <div className='d-flex flex-row mt-3 justify-content-center'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-react'></i> React&nbsp;&nbsp; </div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
          </div>
          <div className='d-flex flex-row mb-2 justify-content-center'>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2020 - present</p>
          </div>
        </div>
      </Col>
    </Row>

    <Row className='my-4 mx-3'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <div className='d-none d-lg-block'>
            <ImageGallery showPlayButton={false} items={axsImages} showFullscreenButton={false} />
          </div>
          <div className='d-block d-lg-none'>
            <ImageGallery showPlayButton={false} items={axsImages} showFullscreenButton={false} showThumbnails={false} />
          </div>
        </div>
      </Col>
    </Row>

    <Row className='my-5 mx-3'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <Tab.Container defaultActiveKey="1">
            <Tab.Content className='mb-4'>
              <Tab.Pane eventKey="1">
                <ReactPlayer url='https://www.youtube.com/embed/cnqBOrnMhgg' controls width="100%"/>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <ReactPlayer url='https://www.youtube.com/embed/wE3CVpj9sIk' controls width="100%"/>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <ReactPlayer url='https://www.youtube.com/embed/-II4OYYzIzU' controls width="100%"/>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <ReactPlayer url='https://www.youtube.com/embed/9qXm57pJuZc' controls width="100%"/>
              </Tab.Pane>
            </Tab.Content>

            <Nav variant="pills" className='justify-content-center' >
              <Nav.Item className='cursor-pointer mx-xl-3'>
                <Nav.Link eventKey="1">
                  Schedule Form
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='cursor-pointer mx-xl-3'>
                <Nav.Link eventKey="3">
                  View Form
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='cursor-pointer  mx-xl-3'>
                <Nav.Link eventKey="2">
                  Message Patient
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='cursor-pointer  mx-xl-3'>
                <Nav.Link eventKey="4">
                  Telehealth Video
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </Col>
    </Row>

    <Row className='mb-4'>
      <Col xs='12' lg={{span: 8, offset: 2}} className='text-light px-5 px-sm-0'>
        <p>As a Front-End Developer at AxS Health I have the pleasure of developing features for our client web platform as well as our patient web, iOS and Android platforms. I develop dynamic and reusable components in React JS in order to give physicians the ability to schedule and perform Telehealth Appointments with patients. Additionally our client platform allows users to send forms to patients in order to easily and efficiently collect patient information as well as message patients directly.</p>
        <ul>
            <li>Created dynamic and reusable components with React JS.</li><br />
            <li>Tested ui components and implemented continuous integration using Jest.</li><br />
            <li>Implemented responsive design patterns using bootstrap and CSS media queries.</li><br />
            <li>Brought projects to life through interactive elements like SVG and CSS animations.</li><br />
            <li>Integrated with back-end systems, APIs, and SDKs to create rich, data-driven behaviors.</li><br />
            <li>Utilized Browserstack to review and test code against modern browsers and mobile devices.</li><br />
            <li>Built mobile-first, touch-optimized web applications, and cross-platform mobile applications.</li><br />
            <li>Improved video chat capabilities on web and mobile platforms using Twilio's video framework.</li><br />
            <li>Developed components for a private npm package used to share ui components across all platforms.</li><br />
            <li>Followed the DRY principle when building static websites for clients using Laravel's Jigsaw framework.</li><br />
            <li>Translated design comprehensives into web and mobile standards-compliant HTML/CSS/JavaScript markup.</li><br />
        </ul>
        <br />
        <h5>About AxS:</h5>
        <p>AxS offers digital patient registration, telemedicine, and patient communication solutions, enabling practices to improve access and deliver care simply.</p>
        <p>The difficulties healthcare presents to the US public are only increasing.  However, only now do we live in an environment that is capable of welcoming solutions to those difficulties.  We've entered an era where medical opinion, technologies and public demand have all come together to accept these changes and create a tool that can actually make a difference in the way patients interact with the healthcare system.  </p>
        <p>We, and others like us, are recognizing this environment and creating tools that patients can leverage, making each participant a change-maker in their own right.  We just happen to do it better.</p>
        <p>AxS Health has developed a healthcare software platform that gives patients priority access to in-person doctor visits as well as convenient, in-app telemedicine treatment for simple conditions. Combining these elements makes AxS the only truly comprehensive offering for digital healthcare access for Cash, PPO, and High Deductible Health Plan holding patients. </p>
      </Col>
    </Row>

    <hr className='my-5' />

    <Row className='mt-5'>
      <Col lg={{span: 8, offset: 2}} className='text-light'>
        <h1 className='fw-light text-center d-lg-block d-none'>
          Full-Stack Developer @ Donaldson Arthritis Research Foundation
        </h1>
        <h1 className='fw-light text-center d-lg-none d-block'>
          Full-Stack Developer <br /> <small>@ Donaldson Arthritis Research Foundation</small> 
        </h1>

        <div className='d-none d-sm-block'>
          <div className='d-flex flex-row justify-content-center mt-3 mb-2'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div>JQuery&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2018 - 2020</p>
          </div>
        </div>
        <div className='d-block d-sm-none mt-4'>
          <div className='d-flex flex-row mt-3 justify-content-center'>
            <div><i className='fa-brands fa-js'></i> Javascript&nbsp;&nbsp;</div>
            <div>JQuery&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-html5'></i> HTML&nbsp;&nbsp;</div>
          </div>
          <div className='d-flex flex-row mb-2 justify-content-center'>
            <div><i className='fa-brands fa-css3'></i> CSS&nbsp;&nbsp;</div>
            <div><i className='fa-brands fa-php'></i> PHP&nbsp;&nbsp;</div>
            <div>MySQL</div>
          </div>
          <div className='d-flex flex-row justify-content-center'>
            <p>2018 - 2020</p>
          </div>
        </div>
      </Col>
    </Row>

    <Row className='my-4 mx-3'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <div className='d-none d-lg-block'>
            <ImageGallery showPlayButton={false} items={darfImages} showFullscreenButton={false} />
          </div>
          <div className='d-block d-lg-none'>
            <ImageGallery showPlayButton={false} items={darfImages} showFullscreenButton={false} showThumbnails={false} />
          </div>
        </div>
      </Col>
    </Row>

    <Row className='my-5 mx-3'>
      <Col lg={{span: 8, offset: 2}}>
        <div className='mb-4'>
          <Tab.Container defaultActiveKey="1">
            <Tab.Content className='mb-4'>
              <Tab.Pane eventKey="1">
                <ReactPlayer url={BarcodeScannerTutorial} controls width="100%"/>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <ReactPlayer url={ChangePasswordTutorial} controls width="100%"/>
              </Tab.Pane>
            </Tab.Content>

            <Nav variant="pills" className='justify-content-center' >
              <Nav.Item className='cursor-pointer mx-xl-3'>
                <Nav.Link eventKey="1">
                  Barcode Scanner
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='cursor-pointer mx-xl-3'>
                <Nav.Link eventKey="2">
                  Change Password
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </Col>
    </Row>

    <Row className='mb-4 pb-5'>
      <Col xs='12' lg={{span: 8, offset: 2}} className='text-light px-5 px-sm-0'>
        <p>As a Fullstack Developer at Donaldson Arthritis Research Facility (DARF) I worked on a CakePHP web application that was used to keep track of patient's post surgery progress by adding patient information to the database and draw analysis from patient data stored in the database. After about a year I decided to rewrite the entire DARF DB web application from scratch using Vue.js as the front-end and the Laravel PHP framework for the backend. </p>
        <ul>
          <li>Managed database manipulation and extraction using MySQL. </li><br />
          <li>Redesigned the UI for several key pages, making it easy to find important patient information. </li><br />
          <li>Gained experience with the MVC design pattern by creating controllers to fetch and display model data. </li><br />
          <li>Implemented a messaging system, allowing users to send and receive messages within the DARF application.</li><br />
          <li>Created a date searchable contact page to list contact information for post surgery patients.</li><br />
          <li>Scripted a cron-job to email weekly patient reports detailing which patients were missing components. </li><br />
          <li>Utilized RESTful APIs and Vue's Vuex store to update and retrieve the current application state.</li><br />
          <li>Added functionality for grouping patients and creating custom flags to filter patients within a group. </li><br />
          <li>Visualized patient's evaluation data with interactive graphs using the Chart.js library. </li><br />
          <li>Employed JSON Web Token authentication for user login and authentication. </li><br />
          <li>Practiced deploying newly written code to the production server with the rocketeer deployment package.</li><br />
          <li>Worked with AWS to create staging servers, patch server issues and apply code edits.</li><br />
          <li>Integrated 3rd party development packages using npm and composer. </li><br />
        </ul>
        <br />
        <h5>About DARF:</h5>
        <p>Spurred by his interest in orthopedic research, Thomas K. Donaldson, MD, founded the Donaldson Arthritis Research Foundation (DARF) in December 2005.</p>
        <p>The continuing partnership with Ian Clarke, PhD, provides a synergy of purpose between these talented, dedicated professionals. The result of this relationship is shown in their many published articles on hip and knee joint replacement surgery and the evolution of prosthetics.</p>
        <p>The focus of DARF is patient arthritis awareness, continued orthopedic education, and clinical and basic science research which will result in the promotion of orthopedic education and the improvement of joint replacement products. </p>
        <p>DARF's mission is to help patients and professionals better understand arthritis and its treatments while continuing support for pain-free motion. Since its formation in 2005, Donaldson Arthritis Research Foundation (DARF) has been working to achieve its mission by supporting orthopedic material science research and educational awareness programs.</p>
        <p>DARF supports both clinical as well as basic science research and scientific forums in relaying these findings. Educational grants are made available to residents, medical students and undergrads for research in our state-of-the-art material science and biomechanics lab. Our mission is achieved by the perfect mixture of financial support for basic science, clinical research in basic orthopedic implants, and support of educational programs for increased arthritis awareness.</p>
        <p>The DARF Research Center supports a worldwide joint implant retrieval program. The results of this research are shared with the industry to promote improved implant devices and implant results. </p>
      </Col>
    </Row>
  </div>
}
