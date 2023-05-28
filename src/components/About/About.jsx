import React from 'react';

import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
  return (
    <div className='container'>
      <nav className='container__nav'>
        <Link to='/home'>
          <img src='/assets/icons/lofi-logo.gif' alt='' />
        </Link>
        <div className='nav-menu'>
          <a
            target='_blank'
            rel='noreferrer'
            href=''
          >
            <i className='fab fa-linkedin'></i>
            <span>Linkedin</span>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/nosime'
          >
            <i className='fab fa-github'></i>
            <span>GitHub</span>
          </a>
          <Link to='/about'>
            <i className='fas fa-info'></i>
            <span>About us</span>
          </Link>
        </div>
      </nav>
      <section className='description'>
        <h1>Welcome to the auto genrate lofi music made by Nosime.</h1>
        <Link to='/'>
          <button className='btn-primary'>Back to homepage</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
