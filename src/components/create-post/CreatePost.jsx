import { useState } from "react";
import Avatar from "../avatar/Avatar";
import { FcGallery } from "react-icons/fc";

export default function CreatePost() {
  const [postImg, setPostImg] = useState("");
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setPostImg(fileReader.result);
      }
    };
  };

  return (
    <form className="flex flex-col items-center w-full gap-2 mt-3">
      <div className="flex items-center justify-center gap-3">
        <span className="mr-2">
          <Avatar />
        </span>
        <input
          type="text"
          placeholder="What's happening ?"
          className="px-2 py-2 border rounded outline-none w-[18rem] sm:w-[29rem] md:w-[40rem] lg:w-[21rem] xl:w-[24rem] 2xl:w-[34rem] focus:ring focus:ring-blue-100"
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      {postImg && (
        <img
          src={postImg}
          alt="post"
          className="justify-center rounded h-52 w-96 sm:w-[33rem] md:w-[44rem] lg:w-[28rem] md:h-64 xl:w-[38rem]"
          onChange={(e) => setPostImg(e.target.value)}
        />
      )}
      <div className="flex">
        <span>
          <input
            id="create-post"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <label htmlFor="create-post" className="cursor-pointer">
            <FcGallery className="mr-64 sm:mr-[27rem] md:mr-[38rem] lg:mr-[20rem] xl:mr-[22rem] 2xl:mr-[32rem] text-[2.2rem] text-green-600 cursor-pointer" />
          </label>
        </span>
        <button className="btn btn-sm btn-primary">Post</button>
      </div>
    </form>
  );
}
