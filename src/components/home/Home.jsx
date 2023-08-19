import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../../redux/slices/appConfigSlice";

function Home() {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.appConfigReducer.myProfile);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);
  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-16">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
