import * as React from 'react';
import './landing.css';
import logo from '../../assets/logo.svg';
import palms from '../../assets/palms.svg';
import Sparkles from '../reusable/sparkle/Sparkles.jsx';

function Landing() {

  return (
    <div>
      <div class="header">
        {/* <!--Content before waves--> */}
        <canvas id="gradient-canvas" data-transition-in>
        </canvas>
        <div class="inner-header flex">
          <img src={palms} class="App-logo" alt="logo" width="150px" height="150px"/>
          <h1><Sparkles>Palms</Sparkles> Design Tools</h1>
        </div>

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
        {/* <!--Waves end--> */}
      </div>
    </div>
  );
}

export default Landing;