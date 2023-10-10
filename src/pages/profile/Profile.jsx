import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import Post from "../../components/post/Post";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import CreatePost from "../../components/create-post/CreatePost";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Avatar from "../../components/avatar/Avatar";
import Loading from "../../components/loading/Loading";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useGetUserProfileQuery,
} from "../../redux/features/user";

export default function Profile() {
  const params = useParams();
  const { data, isLoading } = useGetUserByIdQuery(params);
  const { data: myData } = useGetUserProfileQuery();

  if (isLoading) {
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
            icon={<Avatar />}
            title="My Profile"
            link={`/user/${myData?.curUser?._id}`}
          />
          <span onClick={logoutUser}>
            <Sidebar icon={<LuLogOut />} title="Logout" link="/login" />
          </span>
        </div>
        <div className="lg:basis-[48%] mt-16 overflow-auto">
          <div className="max-h-screen overflow-y-auto">
            <span className="lg:hidden">
              <ProfileCard />
            </span>
            {params.userId === myData?.curUser?._id && <CreatePost />}
            {data?.user?.posts?.map((item) => (
              <Post
                key={item?._id}
                name={item?.user?.name}
                caption={item?.caption}
                image={item?.image?.url}
                commentsCount={item?.commentsCount}
                likesCount={item?.likesCount}
                isLiked={item?.isLiked}
                timeAgo={item?.timeAgo}
                _id={item?._id}
                userId={item?.user?._id}
              />
            ))}
          </div>
        </div>
        <div className="lg:basis-[25%] mt-20 hidden lg:block overflow-hidden">
          <h3 className="text-xl text-slate-500">Profile</h3>
          <span className="hidden lg:block lg:ml-3">
            <ProfileCard
              name={data?.user?.name}
              userId={data?.user?._id}
              avatar={data?.user?.avatar}
              followersCount={data?.user?.followersCount}
              followingsCount={data?.user?.followingsCount}
              isFollowing={data?.user?.isFollowing}
              ifCurrentUser={data?.user?.ifCurrentUser}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
