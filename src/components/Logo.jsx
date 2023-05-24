import React from "react";

const Logo = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="85"
    >
      <clipPath id="clipPath1">
        <path d="M0,100 L100,0 L200,100 L100,200 Z" />
      </clipPath>
      <clipPath id="clipPath2">
        <path d="M100,0 L200,100 L100,200 L100,100 Z" />
      </clipPath>
      <rect
        width="200"
        height="200"
        fill="#ed180d"
        clipPath="url(#clipPath1)"
      />
      <rect
        width="200"
        height="200"
        fill="#0e8008"
        clipPath="url(#clipPath2)"
      />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="70"
        fontWeight="800"
        fill="#d8d158"
      >
        A.Y.Z
      </text>
    </svg>
  );
};

export default Logo;
