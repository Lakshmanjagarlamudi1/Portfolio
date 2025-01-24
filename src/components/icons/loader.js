import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Letter L */}
      <g id="L" transform="translate(30, 40)">
        <path
          d="M5,0 L5,20 L15,20 L15,15 L10,15 L10,0 Z"
          fill="currentColor"
        />
      </g>
      {/* Letter N */}
      <g id="N" transform="translate(45, 40)">
        <path
          d="M5,0 L5,20 L10,20 L10,5 L15,20 L20,20 L20,0 L15,0 L15,15 L10,0 Z"
          fill="currentColor"
        />
      </g>
      {/* Hexagon Outline */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
