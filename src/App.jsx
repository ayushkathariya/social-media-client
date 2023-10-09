import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/signup/Signup";
import Home from "./components/home/Home";
import RequireUser from "./components/protected-routes/RequireUser";
import Feed from "./pages/feed/Feed";
import OnlyIfNotLoggedIn from "./components/protected-routes/OnlyIfNotLoggedIn";
import Followings from "./pages/followings/Followings";
import FindFriend from "./pages/find-friends/FindFriend";
import Profile from "./pages/profile/Profile";
import Message from "./pages/message/Message";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import SearchUser from "./pages/SearchUser/SearchUser";
import Comment from "./pages/comment/Comment";
import NotFound from "./pages/NotFound/NotFound";
import OTPVerify from "./pages/otp-verify/OTPVerify";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster position="top-right" />
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
          <Route path="/otp-verify" element={<OTPVerify />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
