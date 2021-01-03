import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.content__img}
          src="https://miro.medium.com/max/7680/1*73dOmpiKFUXmWIdFtan4VA.png"
          alt=""
        />
      </div>
      <div className={s.title}>Ava + discription</div>
      
    </div>
  );
};

export default ProfileInfo;
