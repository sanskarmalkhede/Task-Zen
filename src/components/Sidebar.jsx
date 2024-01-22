import React, { useState } from "react";
import "./Sidebar.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="toggle-btn" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </div>
        <h1 id="h1">Task Zen</h1>
      </div>
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
