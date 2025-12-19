import { Grid, List } from "lucide-react";
import React, { useState } from "react";

const ToggleUtility = () => {
  const [activeToggle, setActiveToggle] = useState("grid");

  const handleToggle = (toggleType) => {
    setActiveToggle(toggleType);
  };

  return (
    <div className="flex">
      <button
        className={`flex items-center justify-center w-10 h-10 cursor-pointer border rounded-sm ${
          activeToggle === "list" ? "bg-[#ffc342]" : "bg-[#ffffff]"
        } transition-colors duration-200 focus:outline-none`}
        onClick={() => handleToggle("list")}
        aria-pressed={activeToggle === "list"}
        aria-label="List View"
      >
        <List
          className={`w-5 h-5 ${
            activeToggle === "list" ? "text-black" : "text-gray-600"
          }`}
        />
      </button>

      <button
        className={`flex items-center justify-center w-10 h-10 cursor-pointer border rounded-sm ${
          activeToggle === "grid" ? "bg-[#ffc342]" : "bg-[#ffffff]"
        } transition-colors duration-200 focus:outline-none`}
        onClick={() => handleToggle("grid")}
        aria-pressed={activeToggle === "grid"}
        aria-label="Grid View"
      >
        <Grid
          className={`w-5 h-5 ${
            activeToggle === "grid" ? "text-black" : "text-gray-600"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleUtility;
