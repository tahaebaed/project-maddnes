import React from 'react';
import aboutImg from '../assets/pnghut_heroes-of-the-storm-world-warcraft-battle-for-azeroth-malfurion-stormrage-blizzcon-antler-multiplayer-online-arena.svg';
import '../scss/about.scss';
function About() {
  return (
    <section className='about__section py-3'>
      <div className='container marg'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='col-4'>
            <img src={aboutImg} alt='' width={400} />
          </div>
          <header className='col-5'>
            <div className='d-flex flex-lg-column'>
              <p className='fs-4 text-white   mb-4'>
                <span className='hero-span'> PROJECT MADNESS </span>is here for
                you To :
                <ul className='about_list p-0'>
                  <li className='my-1'> - Max up your dps . </li>
                  <li className='my-1'>
                    - Raids and doungons more fun and easier .
                  </li>
                  <li className='my-1'>
                    - take your tank and healing skill to upper level .
                  </li>
                </ul>{' '}
              </p>
              <button
                type='btn'
                className='btn btn-primary about-btn align-self-end me-5'
              >
                Get It Now
              </button>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}

export default About;
