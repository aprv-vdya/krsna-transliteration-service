"use client";

interface NavDownProps {
  size: number;
}

export default function NavDown({ size }: NavDownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="-200 -200 400 250"
    >
      <path
        d="M -200, -200 L 0,50 L 200,-200 L 150,-200 L 0,0 L -150,-200 Z"
        fill="#554B26"
      />
    </svg>
  );
}
