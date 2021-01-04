import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.items + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message_items}>{props.message}</div>;
};

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
