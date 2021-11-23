/* 
* 90's style spacer div. Creates a spacer based on the args.
* Author: Josh Comeau https://www.joshwcomeau.com/react/modern-spacer-gif/
* Arguemnts:
** size (required) - size to create spacer. creates square spacer is no other args provided.
** axis - horizontal or vertical
** style - additional css styles
* Examples:
** Produces a 16px × 16px gap: <Spacer size={16} />
** Produces a 32px × 1px gap: <Spacer axis="horizontal" size={32} />
*/
//TODO: implement responsive spacer using 'when' argument
// ex: <Spacer
// size = { 32}
// when = {{
//   lgAndUp: 64,
//     xlAndUp: 96,
//   }}
// />
import React from 'react';

const Spacer = ({
  size,
  axis,
  style = {},
}) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};
export default Spacer;