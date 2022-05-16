import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Timeline({ animate = true }) {
  return (
    <VerticalTimeline animate={animate}>
      <VerticalTimelineElement
        date='2020 - present'
        className='vertical-timeline-element--work'
        iconStyle={{
          background:
            'url("https://media-exp1.licdn.com/dms/image/C4D0BAQFjkEgh7evkyg/company-logo_200_200/0/1519896845247?e=2147483647&v=beta&t=2OrUJEw0aOxepEuUCUV8BJZDcWRaYhc_xDJnLSMLeeg") center/99%',
          color: 'black'
        }}
        contentStyle={{ background: 'yellow', color: 'black' }}
      >
        <h3 className='vertical-timeline-element-title'>
          Front-End Developer @ &nbsp;
          <a
            rel='noopener noreferrer'
            href='https://www.axshealthapp.com/'
            target='_blank'
            className='text-dark'
          >
            AxS Health
          </a>
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Redlands, CA</h4>
        <p>
          <i className='fa-brands fa-react'></i> React Front-End Developer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='2018'
        className='vertical-timeline-element--work'
        iconStyle={{
          background:
            'black url("https://static.wixstatic.com/media/ebc113_a93529259e66454e90f308b27a6d6d57.png/v1/fill/w_420,h_185,al_c,lg_1,enc_auto/ebc113_a93529259e66454e90f308b27a6d6d57.png") no-repeat fixed center/80%',
          color: 'black'
        }}
        contentStyle={{ background: 'yellow', color: 'black' }}
      >
        <h3 className='vertical-timeline-element-title'>
          Full-Stack Developer @ Donaldson Arthritis Research Foundation
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Colton, CA</h4>
        <p>
          <b>Front-End:</b> <i className='fa-brands fa-js'></i> Javascript,
          JQuery, <i className='fa-brands fa-html5'></i> HTML,{' '}
          <i className='fa-brands fa-css3'></i> CSS
        </p>
        <p>
          <b>Back-End:</b> <i className='fa-brands fa-laravel'></i> Laravel,{' '}
          <i className='fa-brands fa-php'></i> PHP
        </p>
        <p>
          <b>Database:</b> MySQL
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='2017'
        className='vertical-timeline-element--education'
        iconStyle={{
          background:
            'url("https://media-exp1.licdn.com/dms/image/C560BAQFsjvxBDYgQMA/company-logo_100_100/0/1565726655033?e=2147483647&v=beta&t=d4KP1SEpZiVVK_xgyBEuFCxgWL5BRuDK-8zMco1e9sg") center/99%',
          color: 'black'
        }}
        contentStyle={{ background: 'yellow', color: 'black' }}
      >
        <h3 className='vertical-timeline-element-title'>Graduated College</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          University of California Santa Cruz
        </h4>
        <p>
          <i className='fa-solid fa-graduation-cap'></i> Bachelor Degree in
          Computer Science
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='2015'
        className='vertical-timeline-element--work'
        iconStyle={{
          background:
            'url("https://media-exp1.licdn.com/dms/image/C4E0BAQGz1EtJ-Md81g/company-logo_100_100/0/1643310134685?e=2147483647&v=beta&t=5E_HVDzbI__jhOTSUMJGtM4Z9ZiX6whpdBqbK4yQnNc") center/80%',
          color: 'black'
        }}
        contentStyle={{ background: 'yellow', color: 'black' }}
      >
        <h3 className='vertical-timeline-element-title'>
          Internship @ &nbsp;
          <a
            rel='noopener noreferrer'
            href='https://www.fieldtest.la/'
            target='_blank'
            className='text-dark'
          >
            FieldTest
          </a>
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
        <p>
          <i className='fa-brands fa-python'></i> Python development intern
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'black', color: 'black' }}
      />
    </VerticalTimeline>
  )
}
