import React from "react";
import Avatar from "../avatar/Avatar";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import Popup from "../popup/Popup";
import { useNavigate } from "react-router-dom";

export default function Post({
  _id,
  name,
  timeAgo,
  caption,
  image,
  likesCount,
  commentsCount,
  isLiked,
  userId,
}) {
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <div className="p-3 border rounded">
        <div className="flex items-center gap-3">
          <span onClick={() => navigate(`/user/${userId}`)}>
            <Avatar />
          </span>
          <p>{name}</p>
          <p>{timeAgo}</p>
        </div>
        <div className="px-2 py-2">
          <p>{caption}</p>
          <img
            src={image}
            alt="post"
            loading="lazy"
            className="object-cover h-[26rem] md:h-[28rem] w-full pt-2 rounded"
          />
        </div>
        <div className="flex justify-between px-2 pt-2">
          <span className="flex items-center gap-2 p-2 rounded-md cursor-pointer lg:gap-5 btn-ghost md:px-4">
            {isLiked ? (
              <>
                <FcLike className="text-2xl " />
                <p className="text-xl">{likesCount}</p>
              </>
            ) : (
              <>
                <AiOutlineHeart className="text-2xl " />
                <p className="text-xl">{likesCount}</p>
              </>
            )}
          </span>
          <span
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer lg:gap-5 btn-ghost md:px-4"
            onClick={() => navigate(`/post/${_id}`)}
          >
            <FaRegComment className="text-2xl" />
            <p className="text-xl">{commentsCount}</p>
          </span>
          <div className="flex items-center gap-2 p-2 rounded-md cursor-pointer btn-ghost md:px-4 ">
            <Popup />
          </div>
        </div>
      </div>
    </div>
  );
}

Post.defaultProps = {
  name: "Ayush Kathariya",
  timeAgo: "15m ago",
  caption: "lorem lorem lroem dfsdfsdif mfsdjfsdkifasl lroem",
  image:
    "https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  likesCount: 40,
  commentsCount: 10,
  isLiked: false,
  _id: 123,
  userId: 25,
};
