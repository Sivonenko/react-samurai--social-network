import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.items + ' ' + s.active}>Kiwi</div>
        <div className={s.items}>Polly</div>
        <div className={s.items}>Molly</div>
        <div className={s.items}>Mark</div>
        <div className={s.items}>Andry</div>
        <div className={s.items}>Ann</div>
      </div>
      <div className={s.massage}>
        <div className={s.massage_items}>Hi</div>
        <div className={s.massage_items}>How are you?</div>
        <div className={s.massage_items}>Wow</div>
      </div>
    </div>
  );
};

export default Dialogs;
