/* eslint-disable react/prop-types */
const DropdownUtilityItem = ({ label, isActive = false, onClick }) => {
  return (
    <li
      className={`text-md pt-2 pl-2 pb-2 hover:cursor-pointer
    ${
      isActive
        ? "bg-[#262626] text-[#ffffff]"
        : "hover:bg-gray-200 text-gray-700"
    } transition`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default DropdownUtilityItem;
