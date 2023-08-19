import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import Post from "../../components/post/Post";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import Sponsor from "../../components/sponsor/Sponsor";
import User from "../../components/user/User";
import CreatePost from "../../components/create-post/CreatePost";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setLoading, showToast } from "../../redux/slices/appConfigSlice";
import { TOAST_SUCCESS } from "../../App";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import Avatar from "../../components/avatar/Avatar";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
  const params = useParams();

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
      <div className="lg:flex lg:justify-between">
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
        <div className="lg:basis-[48%] mt-16 overflow-auto">
          <div className="max-h-screen overflow-y-auto">
            <span className="lg:hidden">
              <ProfileCard />
            </span>
            {params.userId === myProfile?._id && <CreatePost />}
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="lg:basis-[25%] mt-20 hidden lg:block overflow-hidden">
          <h3 className="text-xl text-slate-500">Profile</h3>
          <span className="hidden lg:block lg:ml-3">
            <ProfileCard />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
