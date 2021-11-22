import './landing.css';
import 'animate.css';
import React, { useState } from 'react';
import Sparkles from '../reusable/sparkle/Sparkles.jsx';
import Layered3dButton from '../reusable/buttons/layered3d/Layered3d.jsx';
import importScript from '../hooks/useScript/UseScript.jsx';

function Landing({ color }) {
  let [interval, setInterval] = useState(1);
  let bodyStyles = document.body.style;
  const max = 4;
  const min = 1;
  importScript("https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js");
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
      default:
        return;
    }
    setInterval(i);
  }

  let decrease = (i) => {
    i = clamp(i, min, max);
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
      default:
        return;
    }
    setInterval(i);
  }

  return (
    <div>
      <svg class="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill={color}  fill-opacity=".2" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: "path1 12.5s linear infinite alternate" }} />
        <path fill={color}  fill-opacity="1" d="M-100 -100L200 -100L200 20L-100 20Z" style={{ animation: "path2 30s linear infinite alternate" }} />
      </svg>
      <div class="orbital-background landing" style={{ backgroundImage: `linear-gradient(45deg, #26a66e 15%, ${color}, #26a66e 85%)` }}>
        
        <div class="inner-header flex">
          <h1 class="animate__animated animate__bounce">Joe's <Sparkles>Frontend</Sparkles> Toolkit</h1>
        </div>

        <div style={{margin: "-10px 0 30px 0"}}>
          <h4>Change wave speed?</h4>
          <div onClick={() => increase(++interval)}><Layered3dButton text="+"></Layered3dButton></div>
          <div onClick={() => decrease(--interval)}><Layered3dButton text="-"></Layered3dButton></div>
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
      </div>
      {/* <!--Waves end--> */}
    </div>
  );
}

export default Landing;