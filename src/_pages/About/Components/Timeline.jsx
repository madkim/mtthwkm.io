import React from 'react'
import axsLogo from '../../../_assets/axs/logo.jpeg'
import ucscLogo from '../../../_assets/ucsc/logo.jpeg'
import darfLogo from '../../../_assets/darf/logo.webp'
import fieldtestLogo from '../../../_assets/fieldtest/logo.jpeg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Timeline({ animate = true }) {
  return (
    <VerticalTimeline animate={animate}>
      <VerticalTimelineElement
        date='2020 - present'
        className='vertical-timeline-element--work'
        iconStyle={{
          color: 'black',
          background: `url(${axsLogo}) center/99%`,
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
          color: 'black',
          background: `black url(${darfLogo}) no-repeat fixed center/80%`,
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
          color: 'black',
          background:`url(${ucscLogo}) center/99%`,
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
          color: 'black',
          background: `url(${fieldtestLogo}) center/80%`,
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
