import React from "react";
import s from "./../Dialogs.module.css";


const Message = (props) => {
  let newMessageEl = React.createRef();
let addMessage = () => {
  let text = newMessageEl.current.value;
  alert(text)
}
  return (
  <div className={s.message_items}>
    <textarea className={s.textarea} ref={newMessageEl}></textarea>
    {props.message}
    <div>
          <button onClick={addMessage}>Add post</button>
          </div></div>
          )
};



export default Message;
