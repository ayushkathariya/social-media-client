import React from "react";

export default function Avatar({ src }) {
  return (
    <div>
      <img
        src={src}
        alt="avatar"
        loading="lazy"
        className="rounded-full bg-cover cursor-pointer w-9 h-9 md:w-10 md:h-10"
      />
    </div>
  );
}

Avatar.defaultProps = {
  src: "https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg",
};
