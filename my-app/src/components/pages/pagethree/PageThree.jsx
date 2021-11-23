import React, { Suspense, useState } from 'react';
import './pagethree.css';
import useRainbow from '../../hooks/useRainbow/useRainbow.js';
import useFetch from '../../hooks/useApiCall/useFetch';
import PopOutButton from '../../reusable/buttons/popoutbutton/PopOutButton';
import useSound from 'use-sound';
import rave from '../../../assets/rave.mp3';
import Spacer from '../../reusable/spacer/Spacer.jsx';
import ShiftBy from '../../reusable/shifter/ShiftBy';

function PageOne({ color }) {
  const [playbackRate, setPlaybackRate] = React.useState(.75);
  const [play] = useSound(rave, {
    playbackRate,
    volume: 0.2,
  });
  useRainbow("rainbow-background");
  let bodyStyles = document.body.style;
  bodyStyles.setProperty("--background-color", color);
  const Image = React.lazy(() => import('./Image.jsx'));

  const [apiList, setApiList] = useState([
    { url: "https://api.imgflip.com/get_memes", name: "memes" },
  ]);
  let data = useFetch({ url: apiList[0].url });

  let raveOn = () => {
    if (playbackRate > 1.5) {
      setPlaybackRate(playbackRate - 0.1);
      play(rave);
      return;
    }
    setPlaybackRate(playbackRate + 0.1);
    play(rave);
  }

  if (!data) {
    return (<><h1>Loading...</h1></>);
  } else {
    let cleanData = data.data.memes;
    cleanData.shift();
    return (
      <div>
        <div class="transition-gradient-bottom"></div>
        <div id="rainbow-background">
          <div class="parent">
            <div class="row-1">
              <div class="picture-grid static">
                <div class="info-box">
                  <h3>Care for some Memes?</h3>
                  <h4>This Api has been loaded using the custom useFetch hook</h4>
                  <h4>Images are loaded using <a href="https://reactjs.org/docs/code-splitting.html#reactlazy" target="_blank">React Lazy Load Component</a>
                  </h4>
                </div>
              </div>
              <Spacer axis="vertical" size={32} />
              <ShiftBy y={-3}>
                <div class="picture-grid static">
                  <div class="info-box">
                    <h3>How about some Rave?</h3>
                    <h4><a href="https://reactjs.org/docs/code-splitting.html#reactlazy" target="_blank">useSound</a> by Josh Comeau</h4>
                    <div onClick={() => raveOn()}><PopOutButton text="RAVE" style={{ marginTop: "25px", background: color }}></PopOutButton></div>
                  </div>
                </div>
              </ShiftBy>
            </div>

            <div class="row-2">
              <div class="picture-grid">
                {cleanData.map((item, i) => {
                  return (
                    <div class="picture-container">
                      <Suspense fallback={<h1>Loading...</h1>}>
                        <Image
                          src={item.url}
                          height="250px"
                          width="250px"
                          key={i}>
                        </Image>
                      </Suspense>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageOne;