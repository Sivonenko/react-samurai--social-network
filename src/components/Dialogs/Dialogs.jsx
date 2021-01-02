import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
              <div className={s.items + ' ' + s.active}>
                 <NavLink to='/dialogs/1'>Kiwi</NavLink>
                  </div>
        <div className={s.items}><NavLink to='/dialogs/2'>Polly</NavLink></div>
        <div className={s.items}><NavLink to='/dialogs/3'>Molly</NavLink></div>
        <div className={s.items}><NavLink to='/dialogs/4'>Mark</NavLink></div>
        <div className={s.items}><NavLink to='/dialogs/5'>Andry</NavLink></div>
        <div className={s.items}><NavLink to='/dialogs/6'>Ann</NavLink></div>
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
