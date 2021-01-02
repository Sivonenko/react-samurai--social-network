import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";


const Profile = () => {
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
      <MyPosts/>
    </div>
  );
};

export default Profile;
