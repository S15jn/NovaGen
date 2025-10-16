import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // check localStorage on load
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`relative inline-flex items-center w-16 h-9 rounded-full transition-colors duration-300 ${
        isDark ? "bg-blue-500/70" : "bg-gray-400/50"
      }`}
    >
      <span
        className={`absolute left-1 top-1 w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-7 bg-blue-200 shadow-blue-400/40" : "translate-x-0"
        }`}
      ></span>

      {/* Icon section */}
      <span className="absolute left-2 text-[14px] text-yellow-400">
        {!isDark ? "☀️" : ""}
      </span>
      <span className="absolute right-2 text-[14px] text-blue-200">
        {isDark ? "🌙" : ""}
      </span>
    </button>
  );
};

export default Toggle;
