import React from "react";

export default function FootprintPieChart() {
  const data = [
    { label: "Energy", value: 30, color: "#1ABC9C" },
    { label: "Travel", value: 25, color: "#16A085" },
    { label: "Diet", value: 20, color: "#B2E2DF" },
    { label: "Waste", value: 25, color: "#8FD6D4" },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);

  let cumulativeAngle = -90;

  const radius = 160;
  const center = 200;

  const slices = data.map((slice, index) => {
    const startAngle = cumulativeAngle;
    const angle = (slice.value / total) * 360;
    const endAngle = startAngle + angle;
    cumulativeAngle += angle;

    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);

    const largeArc = angle > 180 ? 1 : 0;

    const pathData = `
      M ${center} ${center}
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}
      Z
    `;

    return (
      <g key={index}>
        <path
          d={pathData}
          fill={slice.color}
          stroke="#ddd"
          strokeWidth="4"
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#1f2d2d"
          transform={`rotate(${startAngle + angle / 2}, ${center}, ${center}) translate(0, -110)`}
        >
          {slice.label}
        </text>
      </g>
    );
  });

  return (
    <div style={{ width: "420px", margin: "auto" }}>
      <svg width="400" height="400">
        {/* SLICES */}
        {slices}

        {/* CENTER FOOTPRINT SVG */}
        <image
          href="/footprint.svg"
          x="130"
          y="120"
          width="140"
          height="160"
          opacity="1"
        />
      </svg>
    </div>
  );
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}
