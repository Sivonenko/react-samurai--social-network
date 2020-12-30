import React from 'react'
import s from'./MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

  return (

    <div className={s.caption}>
      <div className={s.button__wrap}>
      <textarea></textarea>
        <button>Add post</button>
        </div>
      <div className={s.item}>
        <Post message='Hello' like='Like 15'/>
        <Post message="It's my first post" like='Like 20'/>
          </div>
      </div>
    
  );
}
export default MyPosts;