import React, { Suspense, useState } from 'react';
import './pagethree.css';
import UseRainbow from '../../reusable/useRainbow/UseRainbow.jsx';
import useFetch from '../../hooks/useApiCall/useFetch';
const Image = React.lazy(() => import('./Image.jsx'));

function PageOne({ color }) {
  UseRainbow("rainbow-background");
  let bodyStyles = document.body.style;
  bodyStyles.setProperty("--background-color", color);

  const [apiList, setApiList] = useState([
    { url: "https://api.imgflip.com/get_memes", name: "memes" },
  ]);
  let data = useFetch({ url: apiList[0].url });

  if (!data) {
    return (<><h1>Loading...</h1></>);
  } else {
    let cleanData = data.data.memes;
    cleanData.shift();
    return (
      <div>
        <div id="rainbow-background">
          <div class="parent">
            <div class="row-1">
              <div class="picture-grid">
                <div class="info-box">
                  <h1>MEMES</h1>
                  <h3>This Api has been loaded using the custom useFetch hook</h3>
                  <h3>Images are loaded using <a href="https://reactjs.org/docs/code-splitting.html#reactlazy" target="_blank">React Lazy Load Component</a>
                  </h3>
                </div>
              </div>
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