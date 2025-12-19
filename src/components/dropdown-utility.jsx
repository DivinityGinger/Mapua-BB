/* eslint-disable react/prop-types */
import DropdownUtilityItem from "./dropdown-utility-item";
import { ChevronDown } from "lucide-react";

const DropdownUtility = ({
  title,
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <div className="dropdown w-full bg-[#ffffff] relative">
      <div
        className="absolute -top-2 left-2 px-1 text-xs font-medium text-gray-600 pr-4"
        style={{
          background: `linear-gradient(to bottom, #f8f8f8 50%, #ffffff 50%)`,
        }}
      >
        {title}
      </div>
      <div
        tabIndex={0}
        role="button"
        className="p-2 border border-gray-400 text-[#262626] rounded-md cursor-pointer flex items-center justify-between"
      >
        {selectedItem || placeholder}
        <ChevronDown className="w-4 h-4 text-gray-600 ml-2" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-[#ffffff] border-2 border-gray-200 z-10 w-full p-2 shadow-md absolute top-full left-0 mt-2"
      >
        {items.map((item, index) => (
          <DropdownUtilityItem
            key={index}
            label={item.label}
            isActive={selectedItem === item.label}
            onClick={() => setSelectedItem(item.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DropdownUtility;
