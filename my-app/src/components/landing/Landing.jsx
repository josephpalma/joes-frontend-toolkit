import './landing.css';
import 'animate.css';
import React, { useState } from 'react';
import Sparkles from '../reusable/sparkle/Sparkles.jsx';
import Layered3dButton from '../reusable/buttons/layered3d/Layered3d.jsx';
import useScript from '../hooks/useScript/useScript.js';
import WavesGradient from '../reusable/backgrounds/wavesgradient/WavesGradient';
import Snowflakes from '../reusable/snowflakes/Snowflakes';

function Landing({ color }) {

  useScript("https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js");
  
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  
  let [interval, setInterval] = useState(1);
  let [speed, setSpeed] = useState(22);
  const max = 4;
  const min = 1;
  
  let increase = (i) => {
    i = clamp(i, min, max);
    if (interval <= 1) { ++i; }
    switch (i) {
      case 1:
        setSpeed(22); //slowest
        console.log("setting slowest")
        break;
      case 2:
        setSpeed(10);
        console.log("setting medium slow")
        break;
      case 3:
        setSpeed(3);
        console.log("setting medium fast")
        break;
      case 4:
        setSpeed(1); //fastest
        console.log("setting fastest")
        break;
      default:
        return;
    }
    setInterval(i);
  }

  let decrease = (i) => {
    i = clamp(i, min, max);
    if (interval >= 4) { --i; }
    switch (i) {
      case 1:
        setSpeed(22);; //slowest
        console.log("setting slowest")
        break;
      case 2:
        setSpeed(10);
        console.log("setting medium slow")
        break;
      case 3:
        setSpeed(3);
        console.log("setting medium fast")
        break;
      case 4:
        setSpeed(1); //fastest
        console.log("setting fastest")
        break;
      default:
        return;
    }
    setInterval(i);
  }

  return (
    <div>
      <Snowflakes />
      <WavesGradient
        priColor={color} 
        secColor={"#26a66e"}
        degrees={45}
        speed={speed}
        content={
          <div>
            <div class="inner-header flex">
              <h1 class="animate__animated animate__bounce">Joe's <Sparkles>Frontend</Sparkles> Toolkit</h1>
            </div>
            <div style={{ margin: "-10px 0 30px 0" }}>
              <h4>Change wave speed?</h4>
              <div onClick={() => increase(++interval)}><Layered3dButton text="+"></Layered3dButton></div>
              <div onClick={() => decrease(--interval)}><Layered3dButton text="-"></Layered3dButton></div>
            </div>
          </div>
        }
        isTop={true}
      />
    </div>
  );
}

export default Landing;