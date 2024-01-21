import React from "react";
import "./Sidebar.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";

const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <IoHomeSharp />,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <MdLibraryBooks />,
  },
  {
    title: "Sign Out",
    path: "/sign-out",
    icon: <PiSignOut />,
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Task Zen</h1>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.path ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.path;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
