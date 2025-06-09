'use client';

import { useState, useRef } from 'react';

const TooltipButton = ({ onClick, label, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    // Delay biar smooth
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  };

  return (
    <div
      className="flex flex-row-reverse items-center gap-3.5 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={onClick}
        aria-label={label}
        className="relative flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 z-10 text-dark bg-white hover:text-white hover:bg-blue"
      >
        {children}
      </button>
      <p
        className={`bg-white text-dark text-xs leading-5 font-medium rounded-[5px] px-3 py-1.5 relative shadow-1 self-end capitalize duration-300 ease-linear ${showTooltip ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}
      >
        {label}
        <span className="inline-block absolute -right-3.5 top-2.5 w-0 h-0 border-[7px] border-solid border-transparent border-l-white"></span>
      </p>
    </div>
  );
};

export default TooltipButton;