import React from 'react'
import s from'./MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  
  let postElements = props.postData.map(post => <Post message={post.message} like={post.likesCount}/>)
  
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text)
  }

  return (

    <div className={s.caption}>
      <div className={s.button__wrap}>
        <h3>My Post</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          </div>
        </div>
      <div className={s.item}>
       {postElements}
          </div>
      </div>
    
  );
}
export default MyPosts;