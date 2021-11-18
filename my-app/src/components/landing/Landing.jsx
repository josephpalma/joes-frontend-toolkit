import './landing.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import palms from '../../assets/palms.svg';
import Sparkles from '../reusable/sparkle/Sparkles.jsx';
import useStickyState from '../reusable/sticky/UseStickyState.jsx';
import Layered3dButton from '../reusable/buttons/layered3d/Layered3d.jsx';
import { setIn } from 'formik';
  
function Landing({ color }) {

  const [interval, setInterval] = useState(1);
  let bodyStyles = document.body.style;

  let increase = () => {
    if (interval >= 5) {
      setInterval(4)
      return;
    } else {
      setInterval(interval + 1)
    }

    switch (interval) {
      case 1:
        bodyStyles.setProperty("--speed", 22 + 's');
        break;
      case 2:
        bodyStyles.setProperty("--speed", 10 + 's');
        break;
      case 3:
        bodyStyles.setProperty("--speed", 3 + 's');
        break;
      case 4:
        bodyStyles.setProperty("--speed", 1 + 's');
        break;
    }
  }

  let decrease = () => {
    if (interval < 1) {
      setInterval(1)
      return;
    } else {
      setInterval(interval - 1)
    }

    switch (interval) {
      case 1:
        bodyStyles.setProperty("--speed", 22 + 's');
        break;
      case 2:
        bodyStyles.setProperty("--speed", 10 + 's');
        break;
      case 3:
        bodyStyles.setProperty("--speed", 3 + 's');
        break;
      case 4:
        bodyStyles.setProperty("--speed", 1 + 's');
        break;
    }
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
          <div onClick={() => increase()}><Layered3dButton text="+"></Layered3dButton></div>
          <div onClick={() => decrease()}><Layered3dButton text="-"></Layered3dButton></div>
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