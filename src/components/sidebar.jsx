import React, { useState } from "react";
import SidebarHeader from "./sidebar-header";
import SidebarItem from "./sidebar-item";
import {
  BookMinus,
  Calendar,
  Globe,
  Landmark,
  LibraryBig,
  LogOut,
  Mail,
  Menu,
  NotebookPen,
  SquarePen,
  UserRound,
  Users,
  X,
} 

from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { icon: Landmark, label: "Institution Page" },
    { icon: UserRound, label: "THEMIS DIONE RAÑOLA" },
    { icon: Globe, label: "Activity" },
    { icon: BookMinus, label: "Courses" },
    { icon: Users, label: "Organizations" },
    { icon: Calendar, label: "Calendar" },
    { icon: Mail, label: "Messages" },
    { icon: NotebookPen, label: "Grades" },
    { icon: LibraryBig, label: "Catalog" },
    { icon: SquarePen, label: "Tools" },
    { icon: LogOut, label: "Sign Out" },
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-1 left-1 z-20 p-1 rounded bg-transparent"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`bg-[#262626] w-56 h-screen flex flex-col justify-between fixed md:static z-10 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SidebarHeader />

        <ul className="flex-1 flex-col mt-4 mb-4 overflow-y-auto">
          {items.map((item, index) => (
            <SidebarItem key={index} Icon={item.icon} label={item.label} />
          ))}
        </ul>

        <ul className="flex flex-col p-2">
          <li className="ml-2 cursor-pointer hover:underline">Privacy</li>
          <li className="ml-2 cursor-pointer hover:underline">Terms</li>
          <li className="ml-2 cursor-pointer hover:underline">Accessibility</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
