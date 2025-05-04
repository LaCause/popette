import React from "react";

interface CurvedTextProps {
  text: string;
  color?: string;
  fontSize?: number;
  letterSpacing?: number;
  width?: number;
  height?: number;
  className?: string;
}

export default function CurvedText({
  text,
  color = "#b8503d",
  fontSize = 24,
  letterSpacing = 6,
  width = 500,
  height = 150,
  className = "",
}: CurvedTextProps) {
  const pathId = `curve-${text.replace(/\s+/g, "-").toLowerCase()}`;
  const curveHeight = height * 0.75;

  return (
    <svg
      viewBox={`0 0 ${width} ${curveHeight}`}
      className={`w-full aspect-[${width}/${curveHeight}] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id={pathId}
          d={`M50,${curveHeight / 2 + 10} Q${width / 2},${curveHeight + 10} ${width - 50},${curveHeight / 2 + 10}`}
          fill="transparent"
        />
      </defs>
      <text
        fontSize={fontSize}
        fill={color}
        letterSpacing={letterSpacing}
        fontFamily="var(--font-body, Montserrat, sans-serif)"
      >
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
