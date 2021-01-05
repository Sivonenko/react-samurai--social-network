import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogMessage/DialogMessage";
import s from "./Dialogs.module.css";




const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Kiwi" },
    { id: 2, name: "Polly" },
    { id: 3, name: "Molly" },
    { id: 4, name: "Mark" },
    { id: 5, name: "Andry" },
    { id: 6, name: "Ann" },
  ];

    let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Wow" },
    { id: 4, message: "Call me!" },
    { id: 5, message: "Ok" },
    { id: 6, message: "Goodbye" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));


  let messageElements = messageData.map((messages) => (
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
