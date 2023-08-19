import React from "react";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mt-3">
      <span className="flex gap-3 items-center">
        <span onClick={() => navigate(`/user/abc`)}>
          <Avatar />
        </span>
        <h2>Ayush Kathariya</h2>
      </span>
      <span>
        <button className="py-1 px-6 rounded-full btn-ghost border-gray-400">
          Follow
        </button>
      </span>
    </div>
  );
}

export default User;
