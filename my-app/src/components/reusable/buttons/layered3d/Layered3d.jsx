import React from 'react';
import './layered3d.css';

function Layered3dButton({ text, type, style }) {
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

export default Layered3dButton;