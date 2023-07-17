import React, { useState } from "react";
import "./StarRating.css";
export default function StarRating({ maxRate = 5, defaultVal = 0, onSetRate }) {
  const [rate, setrate] = useState(defaultVal);
  const [tempRate, settempRate] = useState(0);

  function handleRating(rate) {
    if (rate <= 0 || rate > maxRate) return;
    setrate(rate);
    onSetRate(rate);
  }

  return (
    <div className="flex items-center gap-2">
      <div className="rating">
        {Array.from({ length: maxRate }, (_, i) => (
          <div
            className={`star ${rate >= i + 1 ? "full" : ""} ${tempRate >= i + 1 ? "temp-full" : ""
              }`}
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => settempRate(i + 1)}
            onMouseLeave={() => settempRate(0)}
            key={i}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                pathLength="360"
              ></path>
            </svg>
          </div>
        ))}
      </div>
      <span className="text-lg">{tempRate || rate || 0}</span>
    </div>
  );
}
