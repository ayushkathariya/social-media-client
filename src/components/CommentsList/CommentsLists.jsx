import React from "react";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CommentsLists() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/user/xyz`);
  }

  return (
    <div className="ml-4 my-3 sm:ml-7 md:ml-8">
      <span className="flex items-center gap-2 mt-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s"
          alt="photo"
          onClick={handleNavigate}
          className="w-12 rounded-full cursor-pointer"
        />
        <h1 className="cursor-pointer" onClick={handleNavigate}>
          Dipesh Saud .
        </h1>
        <p>3 hrs ago</p>
      </span>
      <div className="ml-10 mt-1">
        <span>Lorem ipsum dolor sit amet. lorem10</span>
        <span className="flex gap-3 items-center mt-1">
          <span className="flex gap-1 items-center">
            <AiOutlineHeart className="text-xl cursor-pointer" /> 5
          </span>
          <AiOutlineDelete className="text-xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
}

export default CommentsLists;
