import React from 'react';

function Feature({ imgDis, cardTitle, cardDisc }) {
  return (
    <div class='card col-4 bg-remove d-flex flex-coulmn align-items-center border-none my-2'>
      <img src={imgDis} class='card-img-top feature-img' alt='...' />
      <div class='card-body text-center text-white d-flex flex-column justify-content-evenly align-items-center mt-3'>
        <h5 class='card-title feature-title'>{cardTitle}</h5>
        <p class='feature-disc '>{cardDisc}</p>
      </div>
    </div>
  );
}

export default Feature;
