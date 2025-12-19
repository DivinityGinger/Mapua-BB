import React from "react";
import { LibraryBig } from "lucide-react";

const MainHeader = () => {
  return (
    <div className="min-w-full bg-[#ffffff] min-h-28 border-b-2 border-[#cdcdcd] flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-4xl ml-8 text-slate-950 font-serif">Courses</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex mr-8">
          <LibraryBig className="w-8 h-8 text-slate-600 mr-2" />
          <p className="text-lg text-slate-600">Course Catalog</p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
