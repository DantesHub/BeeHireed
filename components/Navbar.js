import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <div className='uk-position-top z-index-999'>
        <div
          className='navbar-transparent'
          data-uk-sticky='animation: uk-animation-slide-top-small; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200'
        >
          <nav
            className='uk-navbar-container uk-navbar-transparent'
            data-uk-navbar='boundary-align: true; align: center;'
          >
            <div className='uk-navbar-left padding-left-four-percent'>
              <Image src='/images/beeLogo.png' width='40' height='40' />
              <Link href='/'>
                <a className='text-black text-weight-700 heebo padding-left-minus-4 page-title-medium'>
                  Beehired.
                </a>
              </Link>
            </div>

            <div className='uk-navbar-right '>
              <ul className='uk-navbar-nav text-weight-600'>
                <li>
                  <div className='uk-navbar-left uk-hidden@l'>
                    <a
                      className='uk-navbar-toggle'
                      data-uk-navbar-toggle-icon
                      data-uk-toggle='target: #offcanvas-nav'
                    ></a>
                  </div>
                </li>
                <li>
                  <Link className='' href='/' data-uk-scroll>
                    <a className='text-large uk-visible@l'>
                      <div className='text-gray-dark nav-link'>Home</div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/' data-uk-scroll>
                    <a className='text-large uk-visible@l'>
                      <div className='text-gray-dark nav-link'>Features</div>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/blog' data-uk-scroll>
                    <a className='text-large uk-visible@l'>
                      <div className='text-gray-dark nav-link'>Blog</div>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/' data-uk-scroll>
                    <a className='text-large uk-visible@l'>
                      <div className='text-gray-dark nav-link'>Contact</div>
                    </a>
                  </Link>
                </li>

                <li>
                  <a className='uk-visible@l' href='#'>
                    <i className='fab fa-twitter twitter'></i>
                  </a>
                </li>

                <li>
                  <a className='uk-visible@l' href='#'>
                    <i className='fab fa-instagram instagram'></i>
                  </a>
                </li>

                <li>
                  <a className='uk-visible@l' href='#'>
                    <i className='fab fa-facebook facebook'></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div
        id='offcanvas-nav'
        data-uk-offcanvas='mode: push; flip: true; overlay: true; esc-close: true;'
      >
        <div className='uk-offcanvas-bar menu-dark bg-white uk-flex uk-flex-middle'>
          <div>
            <ul
              className='uk-nav-default uk-nav-parent-icon text-left'
              data-uk-nav
            >
              <li className='margin-top-20px'>
                <a
                  className='uk-navbar-item uk-logo text-gray-dark text-weight-700 heebo'
                  href='#'
                  data-uk-scroll
                >
                  <div className='text-gray-dark page-title-medium'>
                    Beehired.
                  </div>
                </a>
              </li>
              <li className='uk-parent margin-bottom-10px'>
                <Link href='/'>
                  <p className='text-medium text-gray-dark text-weight-500  padding-top-25px heebo text-extra-large'>
                    Home
                  </p>
                </Link>
              </li>
              <li className='uk-parent margin-bottom-10px bottom-border'>
                <p className='text-medium text-gray-dark text-weight-500 padding-top-25px heebo text-extra-large'>
                  Features
                </p>
              </li>
              <li className='uk-parent margin-bottom-10px bottom-border'>
                <Link href='/blog'>
                  <p className='text-medium text-gray-dark text-weight-500 padding-top-25px heebo nav-side text-extra-large'>
                    Blog
                  </p>
                </Link>
              </li>
            </ul>
            <div className='nav-footer margin-top-50px padding-top-25px'>
              <p className='no-margin-bottom margin-top-20px text-small text-gray-dark text-weight-400 '>
                Copyright © 2020 of Beehired. All rights reserved.
              </p>
              <p className='no-margin-bottom text-small text-gray-dark text-weight-400 text-black'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
