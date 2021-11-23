import React from 'react';
import './popoutbutton.css';

function PopOutButton({ text, type, style }) {
  return (
    <div>
      <button
        class="btn btn-background-slide"
        type={type}
        style={style}
      >{text}
        <div class="btn-background-slide--orange btn-background-slide-bg"></div>
      </button>
    </div>
  );
}

export default PopOutButton;