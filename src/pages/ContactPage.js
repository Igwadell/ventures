import React from 'react'
import styles from "./landing/components/hero/contact.module.scss";

import { Link } from 'react-router-dom';

export default function Contacts() { // Match the function name with the file name
  return (
    <div id= {styles.hero}>
      {/* <video src="./"></video> */}
      <div className="navbar">
        <div className="logo">
          <img src="/images/620ee9ebd09e86f4214b6816_PNG W (1)-p-800.png" alt="logo" />
        </div>
        <div className="nav-link">
          <div className="nav-links">
            <Link to="/" className="single-link">Home</Link>
            <Link to="/about" className="single-link">About</Link>
            <Link to="/portfolio" className="single-link">Portfolio</Link>
            <Link to="/contact" className="single-link">Contacts</Link>
          </div>
          <div className="menu">
            <img src="/images/menu.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="left-body">
          <div className="box-title">
            {/* <img src="images/mach-logo.png" alt="" /> */}
            <div className="title">Our People</div>
          </div>
          <div className="subtitle">
          Our people are our strength, bringing decades of experience and expertise across all sectors and institutions across world at the forefront work we do.
          </div>
          <div className="learn-more">
            <div className='pica'>
              <img src='/images/pica.png' alt='pica'/>
              <div className='picbox'></div>
            </div>
            <div className='picb'>
              <img src='/images/picb.png' alt='picb'/>
              <div className='picbox'></div>
            </div>
            <div className='picc'>
              <img src='/images/picc.png' alt='picc'/>
              <div className='picbox'></div>
            </div>
          </div>
        </div>
        <div className="points">
          <div className="point">
            <div className="point-circle"></div>
          </div>
          <div className="point">
            <div className="point-circle"></div>
          </div>
          <div className="point">
            <div className="point-circle"></div>
          </div>
          <div className="point-active">
            <div className="point-circle"></div>
          </div>
          <div className="point">
            <div className="point-circle"></div>
          </div>
        </div>
      </div>
      <div className="bottom-element">
        <img src="/images/audio.svg" alt="" />
        <img className='scroll' src="/images/scroll.svg" alt="" />
        <div></div>
      </div>
    </div>
  )
}
