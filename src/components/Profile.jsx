import React from 'react'
import s from'./Profile.module.css'


const Profile = () => {
    return (
<div className={s.content}>
        <div>
          <img className={s.content__img}
            src="https://miro.medium.com/max/7680/1*73dOmpiKFUXmWIdFtan4VA.png"
            alt=""
          />
        </div>
        <div className={s.title}>Ava + discription</div>
        <div className={s.caption__wrap}>
          My posts
          <div className={s.caption}>New post</div>
          <div className={s.caption}>post 1</div>
          <div className={s.caption}>post 2</div>
        </div>
      </div>
    )
}

export default Profile