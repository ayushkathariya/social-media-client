import React, { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import Search from "../search/Search";
import Loading from "../loading/Loading";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../left-sidebar/Sidebar";
import { MdOutlineMessage } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import { useGetUserProfileQuery } from "../../redux/features/user";

function Navbar() {
  const navigate = useNavigate();
  const { data: myData, isLoading: myDataLoading } = useGetUserProfileQuery();

  if (myDataLoading) {
    return <Loading />;
  }

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleDarkMode() {
    if (darkMode === "light") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }

  const logoutUser = async () => {
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    toast.success("Logout successful");
  };

  useEffect(() => {
    if (darkMode === "dark") {
      localStorage.setItem("theme", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 z-10 w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 mr-2 sm:w-7 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:w-60"
            >
              <li>
                <Sidebar icon={<AiOutlineHome />} title="Home" link="/" />
              </li>
              <li>
                <Sidebar
                  icon={<AiOutlineSearch />}
                  title="Find Friends"
                  link="/find-friends"
                />
              </li>
              <li>
                <Sidebar
                  icon={<MdOutlineMessage />}
                  title="Message"
                  link="/message"
                />
              </li>
              <li>
                <Sidebar
                  icon={<SlUserFollowing />}
                  title="Followings"
                  link="/followings"
                />
              </li>
              <li>
                <Sidebar
                  icon={<Avatar />}
                  title="My Profile"
                  link={`/user/${myData?.curUser?._id}`}
                />
              </li>
              <li onClick={logoutUser}>
                <Sidebar icon={<LuLogOut />} title="Logout" link="/login" />
              </li>
            </ul>
          </div>
          <Link to="/">
            <AiOutlineHome className="ml-2 text-[27px] rounded-md sm:text-[1.9rem] md:text-[2.3rem] btn-ghost" />
          </Link>
        </div>

        <div className="navbar-center">
          <Search />
        </div>
        <div className="navbar-end md:mr-12 lg:mr-16 xl:mr-20">
          {darkMode === "dark" ? (
            <svg
              className="w-8 cursor-pointer fill-current md:mr-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggleDarkMode}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          ) : (
            <svg
              className="w-8 cursor-pointer fill-current md:mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggleDarkMode}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          )}
          <span onClick={() => navigate(`user/123`)}>
            <Avatar />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
