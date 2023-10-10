import React from "react";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";

export default function User({ name, avatar, userId }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mt-3">
      <span className="flex items-center gap-3">
        <span onClick={() => navigate(`/user/${userId}`)}>
          <Avatar src={avatar} />
        </span>
        <h2>{name}</h2>
      </span>
      <span>
        <button className="px-6 py-1 border-gray-400 rounded-full btn-ghost">
          Follow
        </button>
      </span>
    </div>
  );
}

User.defaultProps = {
  name: "Dipesh Saud",
  avatar: "dfsdfa",
  userId: 25,
};
