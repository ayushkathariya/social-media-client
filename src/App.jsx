import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./components/home/Home";
import RequireUser from "./components/protected-routes/RequireUser";
import Feed from "./pages/feed/Feed";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import OnlyIfNotLoggedIn from "./components/protected-routes/OnlyIfNotLoggedIn";
import toast, { Toaster } from "react-hot-toast";
import Followings from "./pages/followings/Followings";
import FindFriend from "./pages/find-friends/FindFriend";
import Profile from "./pages/profile/Profile";
import Message from "./pages/message/Message";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import SearchUser from "./pages/SearchUser/SearchUser";
import Comment from "./pages/comment/Comment";
import NotFound from "./pages/NotFound/NotFound";

export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";

function App() {
  const isLoading = useSelector((state) => state.appConfigReducer.isLoading);
  const toastData = useSelector((state) => state.appConfigReducer.toastData);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      loadingRef.current?.continuousStart();
    } else {
      loadingRef.current?.complete();
    }
  }, [isLoading]);

  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastData.message);
        break;
    }
  }, [toastData]);

  return (
    <div className="App">
      <LoadingBar color="#000" ref={loadingRef} />
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<RequireUser />}>
          <Route element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/find-friends" element={<FindFriend />} />
            <Route path="/message" element={<Message />} />
            <Route path="/followings" element={<Followings />} />
            <Route path="/user/:userId" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/search-user/:userName" element={<SearchUser />} />
            <Route path="/post/:postId" element={<Comment />} />
          </Route>
        </Route>
        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
