import React from "react";
import dot from "../assets/icons/dot.png";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='nav-outer-wrapper'>
      <div className='nav-inner-wrapper'>
        <div className='title-wrapper'>
          <h1>Cranbery</h1>
          <img className='dot' src={dot} alt='decorative' />
        </div>
        <div className='navigation-links-wrapper'>
          <a className='nav-link' href='#'>
            Home
          </a>
          <a className='nav-link' href='#'>
            Platform
          </a>
          <a className='nav-link' href='#'>
            Price
          </a>
          <a className='nav-link' href='#'>
            Community
          </a>
        </div>
        <div className='call-to-action-wrapper'>
          <a href='#'>Login</a>
          <Button className='btn btn-small' title='Join us' />
        </div>
      </div>
    </div>
  );
}
