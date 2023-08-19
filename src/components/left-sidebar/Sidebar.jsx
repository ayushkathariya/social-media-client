import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ icon, title, link }) {
  return (
    <Link
      to={link}
      className="flex items-center gap-3 w-48 md:py-3 md:gap-3 mt-2 py-2 px-3 rounded btn-ghost cursor-pointer"
    >
      <span className={`text-2xl md:text-[2rem]`}>{icon}</span>
      <h3 className="text-lg font-medium md:text-[1.25rem]">{title}</h3>
    </Link>
  );
}

export default Sidebar;
