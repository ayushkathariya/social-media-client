import React from "react";
import Sidebar from "../../components/left-sidebar/Sidebar";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import Post from "../../components/post/Post";
import { SlUserFollowing } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import CommentsLists from "../../components/CommentsList/CommentsLists";
import CommentForm from "../../components/CommentForm/CommentForm";
import Avatar from "../../components/avatar/Avatar";
import Loading from "../../components/loading/Loading";
import { KEY_ACCESS_TOKEN } from "../../utils/localStorageManager";
import toast from "react-hot-toast";
import {
  useGetPostByIdQuery,
  useGetUserProfileQuery,
} from "../../redux/features/user";
import { useParams } from "react-router-dom";

export default function Comment() {
  const params = useParams();
  const { data, isLoading } = useGetPostByIdQuery(params?.postId);
  const { data: myData } = useGetUserProfileQuery();

  if (isLoading) {
    return <Loading />;
  }

  const logoutUser = async () => {
    localStorage.removeItem(KEY_ACCESS_TOKEN);
    toast.success("Logout successful");
  };
  return (
    <div className="mx-2 lg:mx-8">
      <div className="lg:flex lg:justify-between">
        <div className="lg:basis-[25%] mt-40 hidden lg:block overflow-hidden">
          <Sidebar icon={<AiOutlineHome />} title="Home" link="/" />
          <Sidebar
            icon={<AiOutlineSearch />}
            title="Find Friends"
            link="/find-friends"
          />
          <Sidebar
            icon={<MdOutlineMessage />}
            title="Message"
            link="/message"
          />
          <Sidebar
            icon={<SlUserFollowing />}
            title="Comment"
            link="/followings"
          />
          <Sidebar
            icon={<Avatar />}
            title="My Profile"
            link={`/user/${myData?.curUser?._id}`}
          />
          <span onClick={logoutUser}>
            <Sidebar icon={<LuLogOut />} title="Logout" link="/login" />
          </span>
        </div>
        <div className="lg:basis-[48%] mt-16 overflow-hidden">
          <div className="max-h-screen overflow-y-auto">
            <Post
              _id={data?.post?._id}
              userId={data?.post?.user?._id}
              name={data?.post?.user?.name}
              image={data?.post?.image?.url}
              caption={data?.post?.caption}
              likesCount={data?.post?.likesCount}
              commentsCount={data?.post?.commentsCount}
              isLiked={data?.post?.isLiked}
              timeAgo={data?.post?.timeAgo}
            />
            <span className="lg:hidden">
              <CommentForm
                avatar={data?.post?.user?.avatar}
                postId={data?.post?._id}
              />
              {data?.post?.comments.map((item) => (
                <CommentsLists
                  key={item._id}
                  comment={item?.comment}
                  avatar={item?.user?.avatar}
                  name={item?.user?.name}
                  timeAgo={item?.timeAgo}
                />
              ))}
            </span>
          </div>
        </div>
        <div className="lg:basis-[25%] mt-20 hidden lg:block overflow-auto">
          <CommentForm
            avatar={data?.post?.user?.avatar}
            postId={data?.post?._id}
          />
          {data?.post?.comments.map((item) => (
            <CommentsLists
              key={item._id}
              comment={item?.comment}
              avatar={item?.user?.avatar}
              name={item?.user?.name}
              timeAgo={item?.timeAgo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
