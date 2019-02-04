import React from 'react';
import Arrow from './Arrow';

export default function ({ width, height, color }) {
  const style = {
    position: 'relative',
    margin: '0 auto',
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  };

  return React.createElement(
    "div",
    { style: style },
    React.createElement(Arrow, { size: height, color: color, direction: "left" }),
    React.createElement(Arrow, { size: height, color: color, direction: "right" })
  );
}
