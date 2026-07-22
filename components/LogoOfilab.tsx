import React from "react"

interface LogoOfilabProps {
  className?: string
  width?: number | string
  height?: number | string
  variant?: "color" | "white"
}

export function LogoOfilab({
  className,
  width = "100%",
  height = "auto",
  variant = "color",
}: LogoOfilabProps) {
  const gradientId = "ofilab-hexagon-gradient"
  const iconColor = variant === "color" ? `url(#${gradientId})` : "#ffffff"
  const textColor = variant === "color" ? "#000000" : "#ffffff"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 120"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        {/* Gradient matching the purple-magenta of the Ofilab logo */}
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8a2387" /> {/* Violet/Purple */}
          <stop offset="50%" stopColor="#e94057" /> {/* Magenta/Pink */}
          <stop offset="100%" stopColor="#f27121" /> {/* Bright orange/pink accent */}
        </linearGradient>
        
        {/* Cutout mask for the hexagon */}
        <mask id="ofilab-hexagon-mask">
          {/* Fill white to keep everything */}
          <rect width="120" height="120" fill="#ffffff" />
          
          {/* Inner hexagon cutout (black to subtract) */}
          <path
            d="M 60,38 L 79,49 L 79,71 L 60,82 L 41,71 L 41,49 Z"
            fill="#000000"
          />
          
          {/* Wedge opening to the right (black to subtract) */}
          <path
            d="M 60,60 L 115,26 L 115,94 Z"
            fill="#000000"
          />
        </mask>
      </defs>

      {/* Hexagon Icon */}
      <g transform="translate(10, 0)">
        {/* Outer Hexagon with mask applied */}
        <polygon
          points="60,10 110,38 110,82 60,110 10,82 10,38"
          fill={iconColor}
          mask="url(#ofilab-hexagon-mask)"
        />
      </g>

      {/* OFILAB Text */}
      <text
        x="150"
        y="88"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="80"
        fontWeight="800"
        fill={textColor}
        letterSpacing="-3"
      >
        OFILAB
      </text>
    </svg>
  )
}
