import React from 'react';
import tats from '../assets/images/projects/tats.jpeg';
import tapq from '../assets/images/projects/tapq.jpeg';
import tatb from '../assets/images/projects/tatb.jpeg';
import list from '../assets/images/projects/list.jpeg';
import currency from '../assets/images/projects/currency.jpeg';
import ssiah from '../assets/images/projects/ssiah.png';
import '../assets/styles/Project.scss';

const projectsData: {
  title: string;
  description: string;
  image: string;
  link: string;
}[] = [
  {
    title: 'School Students ID Card Activity Hub (S.S.I.C.A.H)',
    description:
      "A web platform integrating with an IoT ID Card scanner to store and display student activity data in real-time. Built for staff to track and retrieve student whereabouts efficiently. Final year project for my Bachelor's in Computer Engineering, using HTML, CSS, JavaScript, NodeMCU, RFID technology, MySQL, and Vanilla PHP.",
    image: ssiah,
    link: 'https://github.com/mjavason/School-Students-ID-Card-Activity-Hub--S.S.I.A.H-',
  },

  {
    title: 'Electronics Ecommerce Store',
    description:
      'A robust and user-friendly e-commerce platform designed to facilitate the seamless buying and selling of electronic products. Features include an intuitive shopping cart, secure payment gateway integration, and responsive design for a smooth user experience. Built using HTML, CSS, JavaScript, and Vanilla PHP',
    image: tats,
    link: 'https://github.com/mjavason/TA-Tech-Store',
  },
  {
    title: 'ESUT Past Questions Aggregator Site',
    description:
      'A dedicated platform that simplifies academic preparation for students by offering easy access to past exam questions for ESUT courses. Provides a clean and searchable interface to quickly locate relevant materials. Built using HTML, CSS, JavaScript, Vanilla PHP and MySQL for secure data storage and retrieval.',
    image: tapq,
    link: 'https://github.com/mjavason/TA-Past-Questions',
  },
  {
    title: 'Simple Blog Site',
    description:
      'A lightweight and straightforward blogging platform where users can create an account, log in, and publish articles. Designed to encourage content sharing while maintaining simplicity and functionality. Built using HTML, CSS, JavaScript, Vanilla PHP and Bootstrap for a clean UI.',
    image: tatb,
    link: 'https://github.com/mjavason/tatb',
  },
  {
    title: 'Android Todo List App',
    description:
      'A highly functional mobile app that helps users organize and manage daily tasks effectively. Features include task creation and categorization all wrapped in a sleek and intuitive interface. Built using Java and Android Studio, with local storage handled via SQLite.',
    image: list,
    link: 'https://github.com/mjavason/talist',
  },
  {
    title: 'Android Currency Converter',
    description:
      'A real-time currency conversion app designed for travelers and financial enthusiasts. Users can instantly convert between multiple currencies with up-to-date exchange rates, offering convenience and accuracy. Developed with Java and Android Studio, utilizing APIs to fetch live exchange rates.',
    image: currency,
    link: 'https://github.com/mjavason/TA-Currency-Converter',
  },
];

function Project() {
  return (
    <div className='projects-container' id='projects'>
      <h1>Personal Projects</h1>
      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <div className='project' key={index}>
            <a href={project.link} target='_blank' rel='noreferrer'>
              <img
                src={project.image}
                className='zoom'
                alt='thumbnail'
                width='100%'
              />
            </a>
            <a href={project.link} target='_blank' rel='noreferrer'>
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
