/* eslint-disable react/prop-types */
import ToggleUtility from "./toggle-utility";
import SearchUtility from "./search-utility.jsx";
import DropdownUtility from "./dropdown-utility.jsx";

const MainUtilities = ({
  termsItems,
  courses,
  pages,
  selectedTermItem,
  setSelectedTermItem,
  selectedCourseItem,
  setSelectedCourseItem,
  selectedPageItem,
  setSelectedPageItem,
  searchFilter,
  setSearchFilter,
}) => {
  return (
    <div className="flex flex-wrap items-center pl-8 w-full space-y-4 md:space-y-0 h-auto space-x-4 pr-8 mt-8">
      <div className="flex-none">
        <ToggleUtility />
      </div>

      <div className="flex-1">
        <SearchUtility
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
      </div>

      <div className="flex-1">
        <DropdownUtility
          title={"Terms"}
          placeholder={"All Terms"}
          items={termsItems}
          selectedItem={selectedTermItem}
          setSelectedItem={setSelectedTermItem}
        />
      </div>

      <div className="flex-1">
        <DropdownUtility
          title={"Filters"}
          placeholder={"All Courses"}
          items={courses}
          selectedItem={selectedCourseItem}
          setSelectedItem={setSelectedCourseItem}
        />
      </div>

      <div className="w-48 flex items-center justify-center">
        <div className="mr-2">
          <DropdownUtility
            placeholder={"100"}
            items={pages}
            selectedItem={selectedPageItem}
            setSelectedItem={setSelectedPageItem}
          />
        </div>
        <div>
          <p className="text-sm text-gray-800">Items per page</p>
        </div>
      </div>
    </div>
  );
};

export default MainUtilities;
