import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { useCreateCommentMutation } from "../../redux/features/user";

export default function CommentForm({ avatar, postId }) {
  const [createCommentApi] = useCreateCommentMutation();
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (comment === "") return;
      await createCommentApi({ comment, postId });
    } catch (error) {
      console.log(error);
    } finally {
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt="photo" />
      <input
        type="text"
        placeholder="Add a comment"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="w-[90%] lg:w-[60%] border-b-2 outline-none bg-inherit"
      />
      <button className="mr-2 text-xl btn btn-circle" type="submit">
        <FcCheckmark />
      </button>
    </form>
  );
}

CommentForm.defaultProps = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s",
};
