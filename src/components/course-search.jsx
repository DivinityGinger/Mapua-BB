import React, { useState, useEffect } from "react";
import SearchUtility from "./search-utility";

const CourseSearch = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("/assets/data/terms.json")
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
      })
      .catch((err) => {
        console.error("Error loading terms.json:", err);
      });
  }, []);  
  
  const getCourseIdPrefix = (courseId) => {
    const parts = courseId.split('_'); 
    return parts[0];
  };

  const filteredModules = modules
    .map((module) => ({
      ...module,
      courses: module.courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          getCourseIdPrefix(course.id).toLowerCase().includes(searchFilter.toLowerCase())
      ),
    }))
    .filter((module) => module.courses.length > 0); 

  return (
    <div className="w-full">
      {/* Search bar */}
      <SearchUtility
        placeholder="Search Your Courses"
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />

      {/* Display filtered modules and courses */}
      <div className="mt-4">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => (
            <div key={module.id} className="mb-6">
              <h2 className="text-xl font-semibold">{module.id}</h2>
              <div className="mt-2">
                {module.courses.length > 0 ? (
                  module.courses.map((course) => (
                    <div key={course.id} className="p-2 border-b flex items-center">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-gray-600">Professor: {course.professor}</p>
                        <p className="text-sm text-gray-600">Status: {course.status}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No courses found in this module.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No courses match your search.</p>
        )}
      </div>
    </div>
  );
};

export default CourseSearch;
