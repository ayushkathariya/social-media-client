import React from "react";

function CommentForm() {
  return (
    <form className="flex items-center gap-2 mt-4">
      <img
        className="w-12 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s"
        alt="photo"
      />
      <input
        type="text"
        placeholder="Add a comment"
        className="border-b-2 w-full outline-none bg-inherit"
      />
    </form>
  );
}

export default CommentForm;
