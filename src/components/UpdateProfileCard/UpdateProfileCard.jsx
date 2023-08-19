import React, { useState } from "react";

function UpdateProfileCard() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  };

  return (
    <form className="flex w-full h-[90vh] justify-center items-center">
      <div className="lg:mr-16 lg:mt-16 xl:mr-80">
        <div className="border-[2px] p-3 flex flex-col items-center gap-1 rounded-xl">
          <div>
            <label htmlFor="image" className="avatar">
              <div className="rounded-full cursor-pointer w-28 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l0KUeEM0mUEhXmSZJ3xFJyT70amD-Dyz-L2rz-Z5zw&s"
                  title="Click to change profile photo"
                />
              </div>
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div>
            <div className="w-full p-8 rounded-lg sm:w-96">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-lg font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50 focus:outline-none focus:border-blue-500"
                  placeholder="New Password"
                />
              </div>
              <button
                type="submit"
                title="Click to update profile"
                className="w-full btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateProfileCard;
