import React from 'react';
import heroImg from '../assets/pnghut_heroes-of-the-storm-world-warcraft-concept-art-video-game-hero.svg';
import '../scss/hero-box.scss';

function HeroBox() {
  return (
    <section className='hero__bg py-5'>
      <div className='container marg'>
        <div className='d-flex align-items-center justify-content-between'>
          <header className='col-5'>
            <div className='d-flex flex-lg-column'>
              <h1 className='text-white mb-4'>PROJECT MADNESS</h1>
              <p className='hero-desc text-white  mb-4'>
                Project Madness is a{' '}
                <span className='hero-span'>combat rotations plugin </span>for
                world of warcraft using NerdPack's frame work developed and
                maintain by Team Madness members Kleei and Subzrk.
              </p>
              <button
                type='btn'
                className='btn hero-btn align-self-center me-5'
              >
                Combat Routines
              </button>
            </div>
          </header>
          <div className='col-4'>
            <img src={heroImg} alt='' width={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBox;
