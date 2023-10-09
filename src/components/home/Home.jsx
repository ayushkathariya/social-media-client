import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import { useGetUserProfileQuery } from "../../redux/features/user";
import Loading from "../loading/Loading";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isLoading, isError, error } = useGetUserProfileQuery();
  const navigate = useNavigate();

  if (isError && error.status === 403) {
    removeItem(KEY_ACCESS_TOKEN);
    toast.error(error.data.message);
    navigate("/login");
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-16">
      <Navbar />
      <Outlet />
    </div>
  );
}
