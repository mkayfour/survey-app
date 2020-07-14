import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='/' className='left brand-logo'>
            Survey App
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#'>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
