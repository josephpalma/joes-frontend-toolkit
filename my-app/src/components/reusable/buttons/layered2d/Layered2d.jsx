import React from 'react';
import './layered2d.css';

function Layered2dButton({ text, type, style }) {
  return (
    <div>
      <button
        class="btn btn-layered-3d btn-layered-3d--orange"
        type={type}
        style={style}
      >{text}
      </button>
    </div>
  );
}

export default Layered2dButton;