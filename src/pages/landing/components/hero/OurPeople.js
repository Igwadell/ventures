import React from 'react'
import styles from "./hero.module.scss"

export default function OurPeople() { // Match the function name with the file name
  return (
    <div id= {styles.hero}>
      {/* <video src="./"></video> */}
      {/* <div className="navbar">
        <div className="logo">
          <img src="/images/620ee9ebd09e86f4214b6816_PNG W (1)-p-800.png" alt="logo" />
        </div>
        <div className="nav-link">
          <div className="nav-links">
            <div className="single-link">Home</div>
            <div className="single-link">About</div>
            <div className="single-link">Portfolio</div>
            <div className="single-link">Contacts</div>
          </div>
          <div className="menu">
            <img src="/images/menu.svg" alt="" />
          </div>
        </div>
      </div> */}
      <div className="body">
        <div className="left-body">
          <div className="date">
            02/04
          </div>
          <div className="box-title">
            <img src="images/mach-logo.png" alt="" />
            <div className="title">Match My Impact</div>
          </div>
          <div className="subtitle">
              Match My Impact is a global initiative designed to reduce carbon emission by planting 1 million trees across the world. In partnership with Burna Boy, we have created a one-stop shop for a global fan initiative complete with a carbon footprint reduction goal, direct fan experiences,
          </div>
          <div className="learn-more">learn more</div>
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
      {/* <div className="bottom-element">
        <img src="/images/audio.svg" alt="" />
        <img className='scroll' src="/images/scroll.svg" alt="" />
        <div></div>
      </div> */}
    </div>
  )
}
