import React from 'react';
import discordIcon from '../assets/Component3–1.svg';
import '../scss/discordicon.scss';

function Discord() {
  return (
    <div>
      <a
        href='https://discord.gg/3ZbncwDBxr'
        target={'_blank'}
        rel='noreferrer'
      >
        <img className='disIcon' src={discordIcon} alt='...' width={50} />
      </a>
    </div>
  );
}

export default Discord;
