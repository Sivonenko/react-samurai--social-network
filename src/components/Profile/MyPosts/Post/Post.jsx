import React from 'react'
import s from './Post.module.css'


const Post = () => {

  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP_IOLOaOKZWOThCNAna7vap3qGc_ss0qWA&usqp=CAU" alt="cat" />
      post
      <div>
        <span className={s.like}>Like</span>
      </div>
    </div>
  );
}
export default Post;