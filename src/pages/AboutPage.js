import React from 'react'
import styles from "./landing/components/hero/about.module.scss";

import { Link } from 'react-router-dom';

export default function AboutPage() { // Match the function name with the file name
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
            <div className="title">We are 2035 ventures</div>
          </div>
          <div className="subtitle">
          We represent diverse instutions whose interest falls within African and Black commuunities both in Africa, and across the diaspora. Driving Impact, Sustainable Communities and Innovation at the forefront of our Governments, Multinational, NGOs and individual partners across the globe.
          </div>
          <div className="learn-more">
            <div className='pica'>
              <div className="subtitle">
                 We represent diverse instutions whose interest falls within African and Black commuunities both in Africa, and across the diaspora. Driving Impact, Sustainable Communities and Innovation at the forefront of our Governments, Multinational, NGOs and individual partners across the globe.
               </div>
            </div>
            <div className='picb'>
            <div className="subtitle">
                 We represent diverse instutions whose interest falls within African and Black commuunities both in Africa, and across the diaspora. Driving Impact, Sustainable Communities and Innovation at the forefront of our Governments, Multinational, NGOs and individual partners across the globe.
               </div>
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
