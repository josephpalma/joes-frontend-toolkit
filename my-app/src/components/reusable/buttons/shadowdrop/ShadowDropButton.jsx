import React from 'react';
import './shadowdrop.css';

function ShadowDropButton({text, type, style}) {
  return (
    <div>
      <button
        class="btn btn-shadow-drop btn-shadow-drop--black"
        type={type}
        style={style}
      >{text}
      </button>
    </div>
  );
}

export default ShadowDropButton;