import React from "react";
import { useGetUserProfileQuery } from "../../redux/features/user";

export default function Avatar({ src }) {
  const { data } = useGetUserProfileQuery();

  return (
    <div>
      <img
        src={`${data?.curUser?.avatar}`}
        alt="avatar"
        loading="lazy"
        className="rounded-full cursor-pointer w-9 md:w-10"
      />
    </div>
  );
}
