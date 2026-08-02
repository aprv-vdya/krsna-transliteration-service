"use client";

interface RightArrowButtonProps {
  onClick: () => void;
  size: number;
}

export default function RightArrowButton({
  onClick,
  size,
}: RightArrowButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="-200 -100 400 150"
      onClick={onClick}
    >
      <path
        d="M -190,-20 L 60,-20 L 30,-100 L 190,20 L -190,20 Z"
        fill="#554B26"
      />
    </svg>
  );
}
