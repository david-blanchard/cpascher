﻿// eslint-disable-next-line

import React, { Component } from 'react'
import '../css/carousel.css'
import 'bootstrap/dist/css/bootstrap.css'
// import $ from 'jquery'
import { } from 'bootstrap'
import logo from '../assets/images/logos/Cpascher_logo_small.png'
import BusinessHttp from '../business/Http'

import CartNavButton from './CartNavButton'
import SearchNavBar from './SearchNavBar'

const home = BusinessHttp.fullyQualifiedName()

class Header extends Component {
  render () {
    return (
      <>
        <header>
          <nav className='navbar navbar-expand-md fixed-top navbar-dark bg-white shadow-sm'>
            <a className='navbar-brand mr-auto mr-lg-0' href={home}>
              <img src={logo} alt='Cpascher' />
            </a>

            <a className='navbar-toggler p-0 border-0' type='button' data-toggle='offcanvas' href='javascript:void(0)'>
              <span className='navbar-toggler-icon' />
            </a>{' '}

            <div className='navbar-collapse offcanvas-collapse' id='navbarsExampleDefault'>
              <ul className='navbar-nav navbar-dark mr-auto'>
                <li className='nav-item active'>
                  <a className='nav-link text-dark'>Tous nos rayons <span className='sr-only'>(current)</span></a>{' '}
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark'>Promos de l'été</a>{' '}
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link text-dark dropdown-toggle' href='#' id='dropdown01' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Mon compte</a>
                  <div className='dropdown-menu' aria-labelledby='dropdown01'>
                    <button className='dropdown-item' href='#'>Pas encore inscrit ?</button>{' '}
                    <button className='dropdown-item' href='#'>F.A.Q</button>{' '}
                    <button className='dropdown-item' href='#'>Mentions légales</button>{' '}
                  </div>
                </li>
              </ul>
              <SearchNavBar />
              <CartNavButton />
            </div>
          </nav>

          <div className='nav-scroller bg-light shadow-sm'>
            <nav className='nav nav-underline'>
              <a className='nav-link disabled' href='#'>
                <span className='badge badge-pill bg-light align-text-bottom'>Nos partenaires</span>
              </a>
              <a className='nav-link' href='#'>Voyages.pascher </a>{' '}
              <a className='nav-link' href='#'>Locations.pascher</a>{' '}
              <a className='nav-link' href='#'>Voitures.pascher</a>{' '}
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default Header
