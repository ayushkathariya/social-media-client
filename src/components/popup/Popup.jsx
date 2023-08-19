import React, { useEffect, useState } from "react";
import { PiShareFatLight } from "react-icons/pi";
import {
  FBShareBtn,
  FBMessangerShareBtn,
  RedditShareBtn,
  WhatsAppShareBtn,
  TelegramShareBtn,
  EmailShareBtn,
  LinkedInShareBtn,
} from "dv-social-share";

function Popup() {
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
          <h3 className="font-bold text-lg">Share to your friends!</h3>
          <span className={`flex gap-4 justify-around mt-8`}>
            <FBShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />
            <FBMessangerShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />
            <WhatsAppShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />
            <TelegramShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />

            <LinkedInShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />
            <RedditShareBtn
              url="https://dv-social-share.vercel.app"
              quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
              hashTag="#dvsocialshare"
            />
            <span className="text-red-500">
              <EmailShareBtn
                url="https://dv-social-share.vercel.app"
                quote="dv-social-share is a social share buttons for your next React.js & Next.js apps."
                hashTag="#dvsocialshare"
              />
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

export default Popup;
