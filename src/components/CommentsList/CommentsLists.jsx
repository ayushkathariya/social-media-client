import React from "react";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CommentsLists({
  name,
  avatar,
  comment,
  timeAgo,
  userId,
}) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/user/${userId}`);
  }

  return (
    <div className="my-3 ml-4 sm:ml-7 md:ml-8">
      <span className="flex items-center gap-2 mt-4">
        <img
          src={avatar}
          alt="photo"
          onClick={handleNavigate}
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <h1 className="cursor-pointer font-semibold" onClick={handleNavigate}>
          {name}
        </h1>
        <p>{`${timeAgo} ago`}</p>
      </span>
      <div className="mt-1 ml-10">
        <span>{comment}</span>
        {/* <span className="flex items-center gap-3 mt-1">
          <span className="flex items-center gap-1">
            <AiOutlineHeart className="text-xl cursor-pointer" /> 5
          </span>
          <AiOutlineDelete className="text-xl cursor-pointer" />
        </span> */}
      </div>
    </div>
  );
}

CommentsLists.defaultProps = {
  name: "Bikash Saud",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s",
  comment: "this is comment lorem lorem fsdfsad fss ",
  timeAgo: "30 hrs ago",
};
