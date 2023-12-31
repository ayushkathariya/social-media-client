import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    navigate(`/search-user/${name}`);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center px-3 py-[5px] border rounded-full md:py-[3px] md:px-5 xl:mr-10">
        <input
          type="text"
          className="px-2 rounded outline-none bg-inherit w-36 sm:w-64 sm:py-1 md:w-72 md:text-lg lg:w-96 xl:w-[35rem]"
          placeholder="Search Friend"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          <BiSearch
            className="text-xl text-gray-500 cursor-pointer sm:text-3xl md:text-3xl"
            title="Search"
          />
        </button>
      </div>
    </form>
  );
}
