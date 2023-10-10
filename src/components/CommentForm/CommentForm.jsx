import React from "react";

export default function CommentForm({ avatar }) {
  return (
    <form className="flex items-center gap-2 mt-4">
      <img className="w-12 rounded-full" src={avatar} alt="photo" />
      <input
        type="text"
        placeholder="Add a comment"
        className="w-full border-b-2 outline-none bg-inherit"
      />
    </form>
  );
}

CommentForm.defaultProps = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s",
};
