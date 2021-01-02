import React from 'react'
import s from './Post.module.css'


const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP_IOLOaOKZWOThCNAna7vap3qGc_ss0qWA&usqp=CAU" alt="cat" />
    {props.message}
      <div>
        <span className={s.like}>Like {props.like}</span>
      </div>
    </div>
  );
}
export default Post;