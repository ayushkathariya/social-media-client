import React from "react";
import mongo from "../../assets/mongo.jfif";

function Sponsor() {
  return (
    <div className="flex gap-5 justify-between items-center mt-3">
      <img
        className="w-28 rounded-2xl"
        src={mongo}
        alt="photo"
        loading="lazy"
      />
      <span>
        <h1>Geeting most out of MongodDB</h1>
        <a
          className="hover:underline text-blue-600"
          target="_blank"
          href="https://www.mongodb.com/collateral/best-practices-guide-for-mongodb?utm_source=facebook&utm_medium=ps_paid_social&utm_campaign=social_fb_sa_evergreen_pd-null_mdbbestpracticeguide-wp_retarget_gic-null_ww-multi_dev_dv-all_eng_formsubmit&utm_content=retargeting_bestpractices_resource-web-rt_ww_auto_dynamicmessaging_%204_25creativeswap_image_na&utm_term=retargeting_bestpractices_resource-web-rt_ww_auto%20-%20%204_25creativeswap&utm_ad_campaign_id=6315147218742&fbclid=IwAR03GZPAY8y4ZVjXm-t9HYuXuKm5EiTVLUFOAAS_7rZ6N3TO3r4yOldJvBo"
        >
          mongodb.com
        </a>
      </span>
    </div>
  );
}

export default Sponsor;
