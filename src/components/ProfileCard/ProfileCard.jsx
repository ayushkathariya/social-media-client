import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({
  name,
  userId,
  avatar,
  followersCount,
  followingsCount,
  isFollowing,
  ifCurrentUser,
}) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/user/${userId}`);
  }

  return (
    <div className="flex flex-col items-center p-3 border rounded-xl sm:py-10 md:mt-4">
      <img
        onClick={handleNavigate}
        src={avatar}
        alt="image"
        loading="lazy"
        className="rounded-full cursor-pointer h-36 w-36"
      />
      <p
        className="mt-2 text-lg font-semibold cursor-pointer"
        onClick={handleNavigate}
      >
        {name}
      </p>
      <span className="flex gap-6 mt-2 text-lg lg:gap-1">
        <p>{`${followersCount} Followers`}</p>
        <p>{`${followingsCount} Followings`}</p>
      </span>
      <span>
        {ifCurrentUser ? null : isFollowing ? (
          <div className="py-1 mt-3 mb-2 text-lg font-bold text-center border-gray-400 rounded-full cursor-pointer w-52 btn-ghost lg:w-48 xl:w-52">
            Unfollow
          </div>
        ) : (
          <div className="py-1 mt-3 mb-2 text-lg font-bold text-center border-gray-400 rounded-full cursor-pointer w-52 btn-ghost lg:w-48 xl:w-52">
            Follow
          </div>
        )}
        {ifCurrentUser ? (
          <div
            onClick={() => navigate("/update-profile")}
            className="py-1 mt-3 mb-2 text-lg font-bold text-center border-gray-400 rounded-full cursor-pointer w-52 btn-ghost lg:w-48 xl:w-52"
          >
            Update
          </div>
        ) : null}
      </span>
    </div>
  );
}

ProfileCard.defaultProps = {
  name: "Bijay Budha",
  userId: "abc",
  avatar:
    "https://media.istockphoto.com/id/1312136351/photo/3d-illustration-of-cute-cartoon-man-with-eyeglasses-in-blue-shirt-with-arms-crossed-close-up.jpg?s=1024x1024&w=is&k=20&c=BhAW15C2FNji6NdJs5uzj9TrJIoR2RO68UqEqNhKhV8=",
  followersCount: 12,
  followingsCount: 7,
  isFollowing: false,
  ifCurrentUser: false,
};
