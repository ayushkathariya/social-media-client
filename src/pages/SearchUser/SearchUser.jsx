import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Avatar from "../../components/avatar/Avatar";
import Loading from "../../components/loading/Loading";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useGetUserProfileQuery,
  useGetUsersBySearchNameQuery,
} from "../../redux/features/user";

export default function SearchUser() {
  const params = useParams();
  const { data: myData } = useGetUserProfileQuery();
  const { data, isLoading } = useGetUsersBySearchNameQuery(params.userName);

  if (isLoading) {
    return <Loading />;
  }

  const logoutUser = async () => {
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    toast.success("Logout successful");
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
            link={`/user/${myData?.curUser?._id}`}
          />
          <span onClick={logoutUser}>
            <Sidebar icon={<LuLogOut />} title="Logout" link="/login" />
          </span>
        </div>
        <div className="lg:basis-[73%] mt-16 overflow-auto">
          <div className="max-h-screen">
            <h1 className="mt-2 text-3xl font-bold">Results</h1>
            {data?.users.length === 0 && (
              <h1 className="mt-5 text-3xl">{`No ${params.userName} found`}</h1>
            )}
            <span className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {data?.users?.map((item) => (
                <ProfileCard
                  key={item._id}
                  userId={item?._id}
                  name={item?.name}
                  avatar={item?.avatar}
                  followersCount={item?.followersCount}
                  followingsCount={item?.followingsCount}
                  isFollowing={item?.isFollowing}
                  ifCurrentUser={item?.ifCurrentUser}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
