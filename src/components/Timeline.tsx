import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Enugu, Nigeria</h4>
            <p>
              Javascript, Typescript, Nest.js, MongoDB, RESTful APIs, Team Collaboration, Scrum, Agile, Git, GitHub, Postman, Swagger, Redis, Google Maps API, Telegram API
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Enugu, Nigeria</h4>
            <p>
              Javascript, Typescript, Express.js, MongoDB, RESTful APIs, Team Collaboration, Scrum, Agile, Git, GitHub, Postman
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Support Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Enugu, Nigeria</h4>
            <p>
             Troubleshooting, Networking, IT Support, Customer Service
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Engineering Undergraduate</h3>
            <h4 className="vertical-timeline-element-subtitle">Enugu, Nigeria</h4>
            <p>
              Computer Engineering, Microcontrollers, Embedded Systems, Digital Electronics, Computer Networks, Software Engineering, Data Structures and Algorithms, Operating Systems, Computer Architecture
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;