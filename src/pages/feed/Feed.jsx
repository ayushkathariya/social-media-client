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
  useGetPostsQuery,
  useGetUserProfileQuery,
  useGetUserSuggestionsQuery,
} from "../../redux/features/user";

export default function Feed() {
  const { data, isLoading } = useGetPostsQuery();
  const { data: myData } = useGetUserProfileQuery();
  const { data: userSuggestionsData, isLoading: userSuggestionsLoading } =
    useGetUserSuggestionsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (userSuggestionsLoading) {
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
            {data?.posts?.map((item) => (
              <React.Fragment key={item?._id}>
                <Post
                  _id={item?._id}
                  userId={item?.user?._id}
                  name={item?.user?.name}
                  caption={item?.caption}
                  image={item?.image?.url}
                  likesCount={item?.likesCount}
                  commentsCount={item?.commentsCount}
                  isLiked={item?.isLiked}
                  timeAgo={item?.timeAgo}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="lg:basis-[25%] mt-20 hidden lg:block overflow-hidden">
          <h3 className="text-xl text-slate-500">Sponsored</h3>
          <Sponsor />
          <Sponsor />
          <h3 className="mt-4 text-xl text-slate-400">Suggested for you</h3>
          {userSuggestionsData?.users?.map((item) => (
            <React.Fragment key={item?._id}>
              <User
                name={item?.name}
                avatar={item?.avatar}
                userId={item?._id}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
