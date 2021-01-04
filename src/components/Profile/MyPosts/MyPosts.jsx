import React from 'react'
import s from'./MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
let postData = [
  { id: 1, message: 'Hello', likesCount: 12},
  { id: 2, message: 'It"s my first post', likesCount: 16},
  
]
  
  let postElements = postData.map(post => <Post message={post.message} like={post.likesCount}/>)
  return (

    <div className={s.caption}>
      <div className={s.button__wrap}>
        <h3>My Post</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          </div>
        </div>
      <div className={s.item}>
       {postElements}
          </div>
      </div>
    
  );
}
export default MyPosts;