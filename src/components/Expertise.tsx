import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
  faDocker,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  'TypeScript',
  'JavaScript',
  'Express.js',
  'Nest.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'OpenAPI',
  'Swagger',
  'Postman',
];

const labelsSecond = [
  'Git',
  'GitHub Actions',
  'Docker',
//   'Kubernetes',
  'AWS',
  //   'Azure',
  //   'Google Cloud Platform',
  'Linux',
  'Render',
  'CI/CD',
];

const labelsThird = [
  'OpenAI',
  'Groq',
  'LangChain',
  'Qdrant',
  'Hugging Face',
  'LlamaIndex',
  'Streamlit',
];

function Expertise() {
  return (
    <div className='container' id='expertise'>
      <div className='skills-container'>
        <h1>Expertise</h1>
        <div className='skills-grid'>
          <div className='skill'>
            <FontAwesomeIcon icon={faNodeJs} size='3x' />
            <h3>Backend Software Development</h3>
            <p>
              I have built a diverse array of APIs from scratch using modern
              technologies such as Express.js and Nest.js. I have strong
              proficiency in JavaScript, TypeScript, SQL, and NoSQL databases.
            </p>
            <div className='flex-chips'>
              <span className='chip-title'>Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className='skill'>
            <FontAwesomeIcon icon={faDocker} size='3x' />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              practices, testing, CI/CD pipelines, and deployment automation to
              ensure a successful go-live.
            </p>
            <div className='flex-chips'>
              <span className='chip-title'>Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
