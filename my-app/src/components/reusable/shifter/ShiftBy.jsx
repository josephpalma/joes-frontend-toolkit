/*
* A shifter component for pixel perfect, responsive rendering.
* Author: Josh Comeau https://www.joshwcomeau.com/css/pixel-perfection/
* Arguemnts:
** x - x axis to shift by.
** y - y axis to shift by.
* Example:
** <ShiftBy x={-3}><div></div></ShiftBy>
*/

function ShiftBy({ x = 0, y = 0, children, ...delegated }) {
  return (
    <div
      {...delegated}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default ShiftBy;