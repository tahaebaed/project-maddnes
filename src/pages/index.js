import React from 'react';
import Discord from '../components/Discord';
import NavBar from '../layout/NavBar';
import Transaction from '../routes/Transaction';

function Index() {
  return (
    <div>
      <NavBar />
      <Transaction />
      <Discord />
    </div>
  );
}

export default Index;
