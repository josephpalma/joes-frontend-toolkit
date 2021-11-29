import React from 'react';
import './wavesgradient.css'

function WavesGradient({
  priColor = "red",
  secColor = "orange",
  degrees = 90,
  speed = 22,
  isTop = false,
  content = null
}) {
  console.log(speed)
  document.body.style.setProperty("--speed", speed + 's');
  return (
    <div>
      {isTop ?
        <svg class="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill={priColor} fill-opacity=".2" d="M-100 -100L200 -100L200 50L-100 50Z" style={{ animation: "path1 12.5s linear infinite alternate" }} />
        <path fill={priColor} fill-opacity="1" d="M-100 -100L200 -100L200 20L-100 20Z" style={{ animation: "path2 30s linear infinite alternate" }} />
        </svg>
      : null}

      <div class="orbital-background landing" style={{ backgroundImage: `linear-gradient(${degrees}deg, ${secColor} 15%, ${priColor}, ${secColor} 85%)` }}>

        {content ? content :
          <div style={{
            height: "80vh",
            width: "100%",
            margin: "0",
            padding: "0"
          }}></div>
        }

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
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      {/* <!--Waves end--> */}
    </div>
  );
}

export default WavesGradient;