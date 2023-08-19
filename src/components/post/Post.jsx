import React from "react";
import Avatar from "../avatar/Avatar";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import Popup from "../popup/Popup";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <div className="p-3 border rounded">
        <div className="flex items-center gap-3">
          <span onClick={() => navigate("/user/abc")}>
            <Avatar />
          </span>
          <p>Ayush Kathariya</p>
          <p>13m ago</p>
        </div>
        <div className="px-2 py-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            animi.
          </p>
          <img
            src="https://images.pexels.com/photos/4127941/pexels-photo-4127941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            loading="lazy"
            className="object-cover h-[26rem] md:h-[28rem] w-full pt-2 rounded"
          />
        </div>
        <div className="flex justify-between px-2 pt-2">
          <span className="flex items-center gap-2 p-2 lg:gap-5 rounded-md cursor-pointer btn-ghost md:px-4">
            <AiOutlineHeart className="text-2xl" />
            <p className="text-xl">53</p>
          </span>
          <span
            className="flex items-center gap-2 p-2 lg:gap-5 rounded-md cursor-pointer btn-ghost md:px-4"
            onClick={() => navigate("/post/123")}
          >
            <FaRegComment className="text-2xl" />
            <p className="text-xl">25</p>
          </span>
          <div className="flex items-center p-2 rounded-md cursor-pointer gap-2 btn-ghost md:px-4 ">
            <Popup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
