import React, { Component } from 'react';
import './HamburgerMenu.css';

class HamburgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  };

  checkActive() {
    console.log('checking!')
    console.log(this.state.isActive)
    this.state.isActive ? this.setState({isActive: false}) : this.setState({isActive: true})
  };

  render() {

    const hamburgerClassName = this.state.isActive ? 'hamburger hamburger--spin is-active' :
      'hamburger hamburger--spin';
    const navMenuClassName = this.state.isActive ? 'nav-menu show-list' :
      'nav-menu';

    return(
      <div className='hamburger-menu'>
        <button className={hamburgerClassName} type="button" onClick={(event) => {
          event.preventDefault();
          this.checkActive()
        }}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <ul className={navMenuClassName}>
          <li>
            Home
        </li>
          <li>
            PhotoAlbum
        </li>
          <li>
            Video
        </li>
          <li>
            Links
        </li>
        </ul>
      </div>
    )

  };
};

export default HamburgerMenu;