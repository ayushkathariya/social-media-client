import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileCard() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/user/abc");
  }

  return (
    <div className="flex items-center flex-col border p-3 rounded-xl sm:py-10 md:mt-4">
      <img
        onClick={handleNavigate}
        src="https://images.pexels.com/photos/1153334/pexels-photo-1153334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
        className="rounded-full h-36 w-36 cursor-pointer"
      />
      <p
        className="text-lg font-semibold mt-2 cursor-pointer"
        onClick={handleNavigate}
      >
        Ayush Kathariya
      </p>
      <span className="flex text-lg  gap-6 lg:gap-1 mt-2">
        <p>1 Followers</p>
        <p>5 Followings</p>
      </span>
      <span>
        <div className="border-gray-400 w-52 text-center py-1 rounded-full text-lg font-bold cursor-pointer mb-2 mt-3 btn-ghost lg:w-48 xl:w-52">
          Follow
        </div>
        <div
          onClick={() => navigate("/update-profile")}
          className="border-gray-400 w-52 text-center py-1 rounded-full text-lg font-bold cursor-pointer mb-2 mt-3 btn-ghost lg:w-48 xl:w-52"
        >
          Update
        </div>
      </span>
    </div>
  );
}

export default ProfileCard;
