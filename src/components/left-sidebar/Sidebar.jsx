import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ icon, title, link }) {
  return (
    <NavLink
      to={link}
      className="flex items-center w-48 gap-3 px-3 py-2 mt-2 rounded cursor-pointer md:py-3 md:gap-3 btn-ghost"
    >
      <span className={`text-2xl md:text-[2rem]`}>{icon}</span>
      <h3 className="text-lg font-medium md:text-[1.25rem]">{title}</h3>
    </NavLink>
  );
}

export default Sidebar;
