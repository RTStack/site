import React, { useRef, useState } from "react";

const Tooltip = ({ text, children }) => {
  const tooltipRef = useRef(null);
  const [positionClass, setPositionClass] = useState("left-1/2 -translate-x-1/2");
  const [initialized, setInitialized] = useState(false);

  const handleMouseEnter = () => {
    if (initialized) return;

    const tooltipEl = tooltipRef.current;
    if (!tooltipEl) return;

    const rect = tooltipEl.getBoundingClientRect();
    const padding = 10;

    if (rect.left < padding) {
      setPositionClass("left-0 translate-x-0");
    } else if (rect.right > window.innerWidth - padding) {
      setPositionClass("right-0 translate-x-0");
    } else {
      setPositionClass("left-1/2 -translate-x-1/2");
    }

    setInitialized(true); // biar gak hitung ulang terus
  };

  return (
    <div className="relative group cursor-pointer inline-block" onMouseEnter={handleMouseEnter}>
      {children}
      <div
        ref={tooltipRef}
        className={`absolute z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full mb-1 whitespace-nowrap ${positionClass}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
