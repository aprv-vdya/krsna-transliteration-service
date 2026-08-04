"use client";

interface NavUpProps {
  size: number;
}

export default function NavDown({ size }: NavUpProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="-200 -50 400 250"
    >
      <path
        d="M -200, -200 L 0,50 L 200,-200 L 150,-200 L 0,0 L -150,-200 Z"
        transform="scale(1,-1)"
        fill="#554B26"
      />
    </svg>
  );
}
