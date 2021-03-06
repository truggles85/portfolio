import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = () => (
  <div className='section' id='about'>
    <div className='wrapper'>
      <Fade left>
        <h1 className='section__title'>About</h1>
      </Fade>
      <Fade left big delay={250}>
        <hr className='section__hr'/>
      </Fade>

      <div className='skills flex-container flex-container--full'>
        <div className='skill'>
          <Flip left delay={500}>
            <div className='logo-layout__bkg'>
              <i className='fas fa-mobile-alt logo-layout__icon'></i>   
            </div>
          </Flip>
          <Flip top delay={500}>
            <h3 className='skills__title'>Responsive</h3>
            <p className='skills__description'>Always striving to make sure everything looks great on all devices.</p>
          </Flip>
        </div>

        <div className='skill'>
          <Flip left delay={750}>
            <div className='logo-layout__bkg'>
              <i className='fas fa-rocket logo-layout__icon logo-layout__icon--rocket'></i>
            </div>
          </Flip>
          <Flip top delay={750}>
            <h3 className='skills__title'>Fast</h3>
            <p className='skills__description'>Committed to speed because nobody likes long load times.</p>
          </Flip>
        </div>

        <div className='skill'>
          <Flip left delay={1000}>
            <div className='logo-layout__bkg'>
              <i className='far fa-check-circle logo-layout__icon'></i>
            </div>
          </Flip>
          <Flip top delay={1000}>
            <h3 className='skills__title'>Dynamic</h3>
            <p className='skills__description'>Making boring static sites pop into life with dynamic interactivity.</p>
          </Flip>
        </div>

        <div className='skill'>
          <Flip left delay={1250}>
            <div className='logo-layout__bkg'>
              <i className='far fa-lightbulb logo-layout__icon'></i>
            </div>
          </Flip>
          <Flip top delay={1250}>
            <h3 className='skills__title'>Intuitive</h3>
            <p className='skills__description'>Strong preference for clean, easy to use UI/UX.</p>
          </Flip>
        </div>
      </div>
      
      <div className='flex-container'>
        <Fade left delay={250}>
          <div className='bio'>
            <img className='bio__img' src='https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png' alt='A picture of me' />
            <p className='bio__text'>
              Hi, I'm T.J., a front-end developer that loves building web applications, usually with React. I'm passionate about learning new technologies, as well as focused on constantly working to improve my current skill set. In this section you can preview some of the tools that I use. Down below you can view some of the things I've worked on as well as fill out a form to get in contact with me.
            </p>
          </div>
        </Fade>

        <Fade right delay={250}>
          <div className='tools flex-container flex-container--full flex-container--wrap flex-container--flex-start'>
            <div className='tool'>
              <i className='fab fa-html5 tool__logo tool__logo--html'></i>
              <p className='tool__text'>HTML5</p>
            </div>
            <div className='tool'>
              <i className='fab fa-css3-alt tool__logo tool__logo--css'></i>
              <p className='tool__text'>CSS3</p>
            </div>
            <div className='tool'>
              <i className='fab fa-js-square tool__logo tool__logo--js'></i>
              <p className='tool__text'>JavaScript</p>
            </div>
            <div className='tool'>
              <i className='fab fa-react tool__logo tool__logo--react'></i>
              <p className='tool__text'>React</p>
            </div>
            <div className='tool'>
              <i className='fab fa-npm tool__logo tool__logo--npm'></i>
              <p className='tool__text'>npm</p>
            </div>
            <div className='tool'>
              <i className='fab fa-sass tool__logo tool__logo--sass'></i>
              <p className='tool__text'>SCSS</p>
            </div>
            <div className='tool'>
              <i className='fas fa-code-branch tool__logo tool__logo--git'></i>
              <p className='tool__text'>Git</p>
            </div>
            <div className='tool'>
              <i className='fab fa-github tool__logo tool__logo--github'></i>
              <p className='tool__text'>Github</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </div>
);

export default About;