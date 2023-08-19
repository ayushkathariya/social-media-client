import React from "react";

function Avatar({ src }) {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s"
        alt="avatar"
        loading="lazy"
        className="rounded-full cursor-pointer w-9 md:w-10"
      />
    </div>
  );
}

export default Avatar;
