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
        <div>ava + discription</div>
        <div>
          My posts
          <div>New post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    )
}

export default Profile