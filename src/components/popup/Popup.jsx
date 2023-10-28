import { PiShareFatLight } from "react-icons/pi";
import {
  FBShareBtn,
  RedditShareBtn,
  WhatsAppShareBtn,
  TelegramShareBtn,
  LinkedInShareBtn,
  TwitterShareBtn,
} from "dv-social-share";

export default function Popup({ url, caption }) {
  const openModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <button className="flex items-center gap-1" onClick={openModal}>
        <PiShareFatLight className="text-2xl" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Share to your friends!</h3>
          <span className={`flex gap-4 justify-around mt-8`}>
            <FBShareBtn url={url} quote={caption} hashTag="#share" />

            <WhatsAppShareBtn url={url} quote={caption} hashTag="#share" />
            <TelegramShareBtn url={url} quote={caption} hashTag="#share" />

            <LinkedInShareBtn url={url} quote={caption} hashTag="#share" />
            <RedditShareBtn url={url} quote={caption} hashTag="#share" />
            <span className="text-red-500">
              <TwitterShareBtn url={url} quote={caption} hashTag="#share" />
            </span>
          </span>
          <div className="modal-action">
            <button
              className="btn btn-ghost"
              onClick={(e) => e.target.closest("dialog").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
