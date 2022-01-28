import React from 'react';
import footerLogo from '../assets/Logo-Discord.svg';

function Footer() {
  return (
    <div className='about__section'>
      <div class='container'>
        <footer class='py-3'>
          <div class='nav justify-content-center pb-2 mb-2 align-items-center'>
            <h3 className='text-white me-4'>PROJECT MADNESS</h3>
            <img src={footerLogo} alt='' width={90} />
          </div>
          <p class='text-center text-muted'>
            {' '}
            © Copyright 2021 Team Madness. Developed by Kleei and Subzrk, All
            rights reserved. You can contact us on support@project-madness.net
            or join our Discord server.{' '}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
