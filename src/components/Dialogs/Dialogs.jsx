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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Kiwi" id="1" />
        <DialogItem name="Polly" id="2" />
        <DialogItem name="Molly" id="3" />
        <DialogItem name="Mark" id="4" />
        <DialogItem name="Andry" id="5" />
        <DialogItem name="Ann" id="6" />
      </div>
      <div className={s.message}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Wow" />
        <Message message="Hi" />
        <Message message="How are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
