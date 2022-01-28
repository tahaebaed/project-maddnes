import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo-Discord.svg';
import '../scss/navBar.scss';

function NavBar() {
  return (
    <header className='p-1 text-white navbar-index'>
      <div className='container'>
        <div className='align-items-center d-flex flex-wrap justify-content-center justify-content-lg-between'>
          <a
            href='/'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >
            <img src={logo} alt='' width={70} />
          </a>

          <ul className='nav col-12 col-lg-4 me-lg-2 mb-2 justify-content-around mb-md-0'>
            <li>
              <NavLink to='/' className='nav-link fs-6 px-2 text-white hover'>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Store'
                className='nav-link fs-6 px-2 text-white hover'
              >
                STORE
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/SignUp'
                className='nav-link fs-6 px-2 text-white hover'
              >
                SIGN UP
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/SignIn'
                className='nav-link fs-6 px-2 text-white hover'
              >
                SIGN IN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
