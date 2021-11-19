import React, { useState } from 'react';
import './pagethree.css';
import UseRainbow from '../../reusable/useRainbow/UseRainbow.jsx';

function PageOne({ color }) {
  UseRainbow("rainbow-background")
  return (
    <div>
      <div id="rainbow-background">
      </div>
      <div class="parent">
        
      </div>
    </div>
  );
}

export default PageOne;