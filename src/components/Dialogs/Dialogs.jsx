import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogMessage/DialogMessage";
import s from "./Dialogs.module.css";




const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));


  let messageElements = props.state.messageData.map((messages) => (
    <Message message={messages.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.message}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
