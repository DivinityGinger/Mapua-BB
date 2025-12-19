import MainCourses from "./components/main-courses";
import MainHeader from "./components/main-header";
import MainUtilities from "./components/main-utilities";
import Sidebar from "./components/sidebar";
import terms from "./assets/data/terms.json";
import { useState } from "react";

export default function App() {

  const termsItems = [
    { label: "All Terms" },
    ...terms.map((term) => ({ label: term.id })),
  ];

  const courses = [
    { label: "All Courses" },
    { label: "Courses I am taking" },
    { label: "Open courses" },
    { label: "Completed courses" },
  ];

  const pages = [{ label: "25" }, { label: "50" }, { label: "100" }];

  const [selectedTermItem, setSelectedTermItem] = useState(termsItems[0].label);
  const [selectedCourseItem, setSelectedCourseItem] = useState("All Courses");
  const [selectedPageItem, setSelectedPageItem] = useState(pages[2].label);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <div className="flex h-screen bg-[#f8f8f8]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 bg-[#f8f8f8] overflow-y-auto mb-10">
          <MainHeader />
          <MainUtilities
            termsItems={termsItems}
            courses={courses}
            pages={pages}
            selectedTermItem={selectedTermItem}
            setSelectedTermItem={setSelectedTermItem}
            selectedCourseItem={selectedCourseItem}
            setSelectedCourseItem={setSelectedCourseItem}
            selectedPageItem={selectedPageItem}
            setSelectedPageItem={setSelectedPageItem}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <MainCourses
            terms={terms}
            selectedTermFilter={selectedTermItem}
            setSelectedTermFilter={setSelectedTermItem}
            selectedCourseFilter={selectedCourseItem}
            setSelectedCourseFilter={setSelectedCourseItem}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </main>
      </div>
    </>
  );
}
