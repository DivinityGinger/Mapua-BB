/* eslint-disable react/prop-types */
import { XCircle } from "lucide-react";
import MainCard from "./main-card";

const MainCourses = ({
  terms,
  selectedTermFilter,
  selectedCourseFilter,
  searchFilter,
  setSelectedTermFilter,
  setSelectedCourseFilter,
  setSearchFilter,
}) => {
  const filterCourses = (terms) => {
    switch (selectedCourseFilter) {
      case "Courses I am taking":
        return terms.filter((term) => term.id === "2T2425");
      case "Open courses":
        return terms
          .map((term) => ({
            ...term,
            courses: term.courses.filter(
              (courses) => courses.status === "Open"
            ),
          }))
          .filter((term) => term.courses.length > 0);
      case "Completed courses":
        return terms.filter((term) => term.id !== "2T2425");
      default:
        return terms;
    }
  };

  const applySearchFilter = (terms) => {
    if (!searchFilter || searchFilter.trim() === "") {
      return terms;
    }

    const lowerCasedFilter = searchFilter.toLowerCase();

    return terms
      .map((term) => ({
        ...term,
        courses: term.courses.filter((course) =>
          course.title.toLowerCase().includes(lowerCasedFilter)
        ),
      }))
      .filter((term) => term.courses.length > 0);
  };

  const filteredTerms =
    selectedTermFilter === "All Terms" || !selectedTermFilter
      ? filterCourses(terms)
      : filterCourses(terms.filter((term) => term.id === selectedTermFilter));

  const finalFilteredTerms = applySearchFilter(filteredTerms);

  const totalCourses = finalFilteredTerms.reduce(
    (total, term) => total + term.courses.length,
    0
  );

  return (
    <div className="pl-8 pr-8">
      <div className="flex flex-wrap gap-2 pt-4 items-center">
        <p>{totalCourses} results</p>
        {searchFilter && (
          <div className="flex items-center ml-2 bg-[#262626] text-[#f8f8f8] p-1 pl-3 pr-3 rounded-2xl">
            {searchFilter}
            <XCircle
              className="ml-2 w-4 h-4 hover:cursor-pointer"
              onClick={() => setSearchFilter("")}
            />
          </div>
        )}
        {selectedTermFilter !== "All Terms" && (
          <div className="flex items-center ml-2 bg-[#262626] text-[#f8f8f8] p-1 pl-3 pr-3 rounded-2xl">
            {selectedTermFilter}
            <XCircle
              className="ml-2 w-4 h-4 hover:cursor-pointer"
              onClick={() => setSelectedTermFilter("All Terms")}
            />
          </div>
        )}
        {selectedCourseFilter !== "All Courses" && (
          <div className="flex items-center ml-2 bg-[#262626] text-[#f8f8f8] p-1 pl-3 pr-3 rounded-2xl">
            {selectedCourseFilter}
            <XCircle
              className="ml-2 w-4 h-4 hover:cursor-pointer"
              onClick={() => setSelectedCourseFilter("All Courses")}
            />
          </div>
        )}
      </div>
      {finalFilteredTerms.map((term) => (
        <div key={term.id} className="mt-4">
          <h1 className="text-lg text-[#262626] font-semibold">{term.id}</h1>
          <div className="flex flex-wrap sm:gap-2 md:gap-4 lg:gap-6 overflow-x-auto pb-4">
            {term.courses.map((course, index) => (
              <MainCard course={course} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCourses;
