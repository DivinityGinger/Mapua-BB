import React from "react";

const SidebarItem = ({ Icon, label }) => {
  const getBackgroundColor = () => {
    if (label === "Courses") {
      return "text-slate-950 bg-[#ffc342]";
    } else {
      return "text-[#f8f8f8] hover:bg-[#1f1f1f] hover:text-[#f8f8f8] hover:cursor-pointer hover:underline";
    }
  };

  return (
    <li
      className={`w-full pl-3 pr-3 pt-5 pb-5 flex items-center ${getBackgroundColor()}`}
    >
      {Icon && <Icon className="w-6 h-6 ml-2 mr-3" />}
      <span className="text-md truncate">{label}</span>
    </li>
  );
};

export default SidebarItem;
