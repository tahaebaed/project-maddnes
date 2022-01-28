import React from 'react';
import storeImg from '../assets/pngwing.com.svg';
import '../scss/store.scss';

function Store() {
  return (
    <section>
      <div className='d-flex'>
        <div className='store-content__wrapper'>
          <img className='store__img' src={storeImg} alt='' width={800} />
          <h3 className='fs-1 store-content__title text-white'>
            IT WILL BE<br></br> AVAIlLABLE SOON ..
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Store;
