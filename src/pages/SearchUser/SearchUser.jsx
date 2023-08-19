import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, showToast } from "../../redux/slices/appConfigSlice";
import { TOAST_SUCCESS } from "../../App";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";
import Avatar from "../../components/avatar/Avatar";

function SearchUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);

  const logoutUser = async () => {
    dispatch(
      showToast({
        type: TOAST_SUCCESS,
        message: "Logout successful",
      })
    );
    dispatch(setLoading(true));
    await axiosClient.get("/auth/logout");
    removeItem(KEY_ACCESS_TOKEN);
    navigate("/login");
    dispatch(setLoading(false));
  };

  return (
    <div className="mx-2 lg:mx-8">
      <div className="lg:flex lg:gap-2">
        <div className="lg:basis-[25%] mt-40 hidden lg:block overflow-hidden">
          <Sidebar icon={<AiOutlineHome />} title="Home" link="/" />
          <Sidebar
            icon={<AiOutlineSearch />}
            title="Find Friends"
            link="/find-friends"
          />
          <Sidebar
            icon={<MdOutlineMessage />}
            title="Message"
            link="/message"
          />
          <Sidebar
            icon={<SlUserFollowing />}
            title="Followings"
            link="/followings"
          />
          <Sidebar
            icon={<Avatar />}
            title="My Profile"
            link={`/user/${myProfile?._id}`}
          />
          <span onClick={logoutUser}>
            <Sidebar icon={<LuLogOut />} title="Logout" />
          </span>
        </div>
        <div className="lg:basis-[73%] mt-16 overflow-auto">
          <div className="max-h-screen">
            <h1 className="mt-2 text-3xl font-bold">Results</h1>
            <span className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;