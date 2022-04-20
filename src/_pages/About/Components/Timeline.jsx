import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2020 - present"
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'black', color: 'black' }}
        contentStyle={{ background: 'yellow', color: 'black' }}
        dateClassName='text-light'
      >
        <h3 className="vertical-timeline-element-title">
          Front-End Developer @ &nbsp;
          <a
            rel='noopener noreferrer' 
            href="https://www.axshealthapp.com/"
            target='_blank'
            className='text-dark'>
              AxS Health
          </a>
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Redlands, CA</h4>
        <p>
          Python development intern
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2018"
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'black', color: 'black' }}
        contentStyle={{ background: 'yellow', color: 'black' }}
        dateClassName='text-light'
      >
        <h3 className="vertical-timeline-element-title">Full-Stack Developer @ Donaldson Arthritis Research Foundation</h3>
        <h4 className="vertical-timeline-element-subtitle">Colton, CA</h4>
        <p>
          Python development intern
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2017"
        className="vertical-timeline-element--education"
        iconStyle={{ background: 'black', color: 'black' }}
        contentStyle={{ background: 'yellow', color: 'black' }}
        dateClassName='text-light'
      >
        <h3 className="vertical-timeline-element-title">Graduated College</h3>
        <h4 className="vertical-timeline-element-subtitle">University of California Santa Cruz</h4>
        <p>
          Bachelor Degree in Computer Science
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2015"
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'black', color: 'black' }}
        contentStyle={{ background: 'yellow', color: 'black' }}
        dateClassName='text-light'
      >
        <h3 className="vertical-timeline-element-title">
          Internship @ &nbsp;
          <a
            rel='noopener noreferrer' 
            href="https://www.fieldtest.la/"
            target='_blank'
            className='text-dark'>
              FieldTest
          </a>
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          Python development intern
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'black', color: 'black' }}
        />
    </VerticalTimeline>
  )
}
