import './landing.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import palms from '../../assets/palms.svg';
import Sparkles from '../reusable/sparkle/Sparkles.jsx';
import useStickyState from '../reusable/sticky/UseStickyState.jsx';
import Layered3dButton from '../reusable/buttons/layered3d/Layered3d.jsx';
  
function Landing({ color }) {

  const [interval, setInterval] = useState(1);
  let bodyStyles = document.body.style;
  const max = 4;
  const min = 1;

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  let increase = (i) => {
    i = clamp(i, min, max);
    if (i === 1) { ++i; }
    switch (i) {
      case 1:
        bodyStyles.setProperty("--speed", 22 + 's'); //slowest
        console.log("setting: slowest")
        break;
      case 2:
        bodyStyles.setProperty("--speed", 10 + 's');
        console.log("setting: slow medium")
        break;
      case 3:
        bodyStyles.setProperty("--speed", 3 + 's');
        console.log("setting: slow fast")
        break;
      case 4:
        bodyStyles.setProperty("--speed", 1 + 's'); //fastest
        console.log("setting: fast")
        break;
    }
    setInterval(++i);
  }

  let decrease = (i) => {
    i = clamp(i, min, max);
    if (i > 2) { --i; }
    switch (i) {
      case 1:
        bodyStyles.setProperty("--speed", 22 + 's'); //slowest
        console.log("setting: slowest")
        break;
      case 2:
        bodyStyles.setProperty("--speed", 10 + 's');
        console.log("setting: slow medium")
        break;
      case 3:
        bodyStyles.setProperty("--speed", 3 + 's');
        console.log("setting: slow fast")
        break;
      case 4:
        bodyStyles.setProperty("--speed", 1 + 's'); //fastest
        console.log("setting: fast")
        break;
    }
    setInterval(--i);
  }

  return (
    <div>
      <div class="orbital-background landing" style={{ backgroundImage: `linear-gradient(90deg, #543AB7, ${color}, #3c196b)` }}>
        <div class="inner-header flex">
          <img src={palms} class="App-logo" alt="logo" width="150px" height="150px"/>
          <h1>Joe's <Sparkles>Frontend</Sparkles> Toolkit</h1>
        </div>

        <span>
          <h4>Change wave speed?</h4>
          <div onClick={() => increase(interval)}><Layered3dButton text="+"></Layered3dButton></div>
          <div onClick={() => decrease(interval)}><Layered3dButton text="-"></Layered3dButton></div>
        </span>

        {/* <!--Waves Container--> */}
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
            </g>
          </svg>
        </div>
      </div>
      {/* <!--Waves end--> */}
    </div>
  );
}

export default Landing;