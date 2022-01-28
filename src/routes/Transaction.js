import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Store from '../pages/Store';

function Transaction() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/Store'} element={<Store />} />
      <Route path={'/SignUp'} element={<SignUp />} />
    </Routes>
  );
}

export default Transaction;
