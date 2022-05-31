import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

// AXS
import Logo from '../../_assets/axs/Shared/logo@3x.png'
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

import { Row, Col } from 'react-bootstrap'
import { animateWorkPage } from '../../_helpers/animation';

export default function Work() {

  useEffect(() => {
    window.scroll(0, 0)
    animateWorkPage()
  }, [])

  const axsImages = [
    {
      original: Logo,
      thumbnail: Logo,
      originalHeight: 500,
      originalClass: 'original__class--logo'
    },
    {
      original: DigitalRegistration,
      thumbnail: DigitalRegistration,
      thumbnailHeight: 50,
      originalHeight: 500,
      thumbnailClass: 'thumbnail__width mx-2'
    },
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
    <Row className='my-4'>
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
    <Row className='mb-4'>
      <Col xs='12' lg={{span: 6, offset: 3}} className='text-light px-5 px-sm-0'>
        <p>As a Front-End Developer at AxS Health I have the pleasure of developing features for our client web platform as well as our patient web, iOS and Android platforms. I develop dynamic and reusable components in React JS in order to give physicians the ability to schedule and perform Telehealth Appointments with patients. Additionally our client platform allows users to send forms to patients in order to easily and efficiently collect patient information as well as message patients directly.</p>
        <ul>
          <li>Improved  video chat capabilities on web and mobile platforms using Twilio's video framework.</li><br />
          <li>Followed the DRY principle when building static websites for clients using Laravel's Jigsaw framework. </li><br />
          <li>Avoided breaking changes by using Jest to test ui components and implement continuous integration. </li><br />
          <li>Implemented responsive design patterns on our web platform using bootstrap and CSS media queries. </li><br />
          <li>Utilized Browserstack to ensure consistency across all major mobile devices.</li><br />
          <li>Developed components for a private npm package used to share ui components across all platforms.</li>
        </ul>
        <br />
        <h5>About AxS:</h5>
        <p>Our platform offers digital patient registration, telemedicine, and patient communication solutions, enabling practices to improve access and deliver care simply.</p>
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
    <Row className='my-4'>
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
    <Row className='mb-4 pb-5'>
      <Col xs='12' lg={{span: 6, offset: 3}} className='text-light px-5 px-sm-0'>
        <p>Managed database manipulation and extraction using MySQL. </p>
        <p>Redesigned the UI for several key pages, making it easy to find important patient information. </p>
        <p>Gained experience with the MVC design pattern by creating controllers to fetch and display model data. </p>
        <p>Implemented a messaging system, allowing users to send and receive messages within the DARF application.</p>
        <p>Created a date searchable contact page to list contact information for post surgery patients.</p>
        <p>Scripted a cron-job to email weekly patient reports detailing which patients were missing components. </p>
        <p>Utilized RESTful APIs and Vue's Vuex store to update and retrieve the current application state.</p>
        <p>Added functionality for grouping patients and creating custom flags to filter patients within a group. </p>
        <p>Visualized patient's evaluation data with interactive graphs using the Chart.js library. </p>
        <p>Employed JSON Web Token authentication for user login and authentication. </p>
        <p>Practiced deploying newly written code to the production server with the rocketeer deployment package.</p>
        <p>Worked with AWS to create staging servers, patch server issues and apply code edits.</p>
        <p>Integrated 3rd party development packages using npm and composer. </p>
      </Col>
    </Row>
  </div>
}
