import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import Post from "../../components/post/Post";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import Sponsor from "../../components/sponsor/Sponsor";
import User from "../../components/user/User";
import Avatar from "../../components/avatar/Avatar";
import Loading from "../../components/loading/Loading";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import {
  useGetUserProfileQuery,
  useGetFollowingUsersQuery,
  useGetFollowingUsersForDisplayQuery,
} from "../../redux/features/user";

export default function Followings() {
  const { data: myData } = useGetUserProfileQuery();
  const { data, isLoading } = useGetFollowingUsersQuery();
  const { data: followingUser, isLoading: followingUserLoading } =
    useGetFollowingUsersForDisplayQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (followingUserLoading) {
    return <Loading />;
  }

  const logoutUser = async () => {
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    toast.success("Logout successful");
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
            icon={<Avatar src={myData?.curUser?.avatar} />}
            title="My Profile"
            link={`/user/${myData?.curUser?._id}`}
          />
          <span onClick={logoutUser}>
            <Sidebar icon={<LuLogOut />} title="Logout" link="/login" />
          </span>
        </div>
        <div className="lg:basis-[48%] mt-16 overflow-auto">
          <div className="max-h-screen overflow-y-auto">
            {data?.posts?.length === 0 && (
              <h1 className="mt-5 font-semibold text-2xl">No posts</h1>
            )}
            {data?.posts?.map((item) => (
              <Post
                key={item?._id}
                _id={item?._id}
                image={item?.image?.url}
                caption={item?.caption}
                likesCount={item?.likesCount}
                commentsCount={item?.commentsCount}
                name={item?.user?.name}
                isLiked={item?.isLiked}
                timeAgo={item?.timeAgo}
                userId={item?.user?._id}
              />
            ))}
          </div>
        </div>
        <div className="lg:basis-[25%] mt-20 hidden lg:block overflow-hidden">
          <h3 className="text-xl text-slate-500">Sponsored</h3>
          <Sponsor />
          <Sponsor />
          <h3 className="mt-4 text-xl text-slate-400">Followings</h3>
          {followingUser?.users?.map((item) => (
            <User
              key={item?.user?._id}
              userId={item?.user?._id}
              name={item?.user?.name}
              avatar={item?.user?.avatar}
              isFollowing={item?.isFollowing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
