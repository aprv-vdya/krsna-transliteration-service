"use client";

interface LeftArrowButtonProps {
  onClick: () => void;
  size: number;
}

export default function LeftArrowButton({
  onClick,
  size,
}: LeftArrowButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="-200 -50 400 150"
      onClick={onClick}
    >
      <path
        d="M -190,-20 L 60,-20 L 30,-100 L 190,20 L -190,20 Z"
        fill="#554B26"
        transform="scale(-1,-1)"
      />
    </svg>
  );
}
