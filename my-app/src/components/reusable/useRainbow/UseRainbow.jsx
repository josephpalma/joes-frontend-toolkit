import { useEffect } from 'react';

/* 
* Use a rainbow background. Works with any html object.
* Argument: objId - id attribute of html element to rainbow.
* Author: Rafal Pastuszak https://sonnet.io/posts/use-rainbow/
*/
export const UseRainbow = (objId) => {
  useEffect(() => {
    const cb = () => {
      const viewportHeight = window.innerHeight;
      const contentHeight = document.body.getBoundingClientRect().height; //to improve performance: pass this in as param

      const viewportsPerRotation = Math.min(3, contentHeight / viewportHeight);

      const from = 51;
      const progress = window.scrollY / (viewportHeight * viewportsPerRotation);
      const h = (from + 360 * progress) % 360;

      let obj = document.getElementById(objId);
      obj.style.backgroundColor = `hsl(${h}deg, 100%, 50%)`;
    }
    window.addEventListener('scroll', cb, { passive: true }); //use passive event listeners for high quality scrolling
    return () => window.removeEventListener('scroll', cb); //https://developers.google.com/web/updates/2016/06/passive-event-listeners
  });
}

export default UseRainbow;