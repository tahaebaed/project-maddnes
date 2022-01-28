import React from 'react';
import Feature from '../components/Features';
import cds from '../assets/059---Ability-Cooldown.svg';
import def from '../assets/shield-variant-with-white-and-black-borders.svg';
import inter from '../assets/Group 4.svg';
import combat from '../assets/crossed.svg';
import setting from '../assets/settings.svg';
import '../scss/features.scss';

function Features() {
  const staticData = [
    {
      id: 1,
      icon: cds,
      title: 'Smart Cooldowns',
      description:
        'Smart Cooldowns Smart usage of the cooldown spells including the trinkets/rings, Syncing them together to get out the maximum performance. Can easily be toggled ON/OFF',
    },
    {
      id: 2,
      icon: def,
      title: 'Smart Defensives/Heals',
      description:
        ' Smart usage of defensive/heal spells to help you survive the battle. Can easily be controlled from the settings. ',
    },
    {
      id: 3,
      icon: inter,
      title: 'Smart Interrupts',
      description:
        ' Smart usage of interrupts in PVE/PVP, Automatically interrupting the right spells at the right time. Can easily be toggled ON/OFF. ',
    },
    {
      id: 4,
      icon: combat,
      title: 'Smart combat system',
      description:
        ' Smart usage of the skills and attack that make you Switching between multi and single target rotations automatically depends on the situation. ',
    },
    {
      id: 5,
      icon: setting,
      title: 'Adjustable Keybinds/seeting',
      description:
        'Having the ability to easily bind your spells to any keys you wish and the  ability to customize different values as you wish and enable /disable the usage of some abilities from the settings GUI. ',
    },
  ];
  console.log(staticData);
  return (
    <section className='features__section '>
      <div className='container d-flex flex-column'>
        <h2 className='feature-title text-center my-5'>WHY TO USE..</h2>
        <div className='d-flex flex-wrap justify-content-evenly my-5'>
          {staticData.map(el => (
            <Feature
              imgDis={el.icon}
              cardTitle={el.title}
              cardDisc={el.description}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
