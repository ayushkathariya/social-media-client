import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import UpdateProfileCard from "../../components/UpdateProfileCard/UpdateProfileCard";
import Avatar from "../../components/avatar/Avatar";
import { useSelector } from "react-redux";

function UpdateProfile() {
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);

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
            title="UpdateProfile"
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
          <Sidebar icon={<LuLogOut />} title="Logout" />
        </div>
        <div className="lg:basis-[73%]">
          <span className="mb-5">
            <UpdateProfileCard />
          </span>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
