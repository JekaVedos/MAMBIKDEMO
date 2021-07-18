import s from "../Message.module.scss";
import imgMess from "../../../img/squishi-round.jpg";
import React from "react";

const Message = (props) => {
   return (
      <li className={s.message_cont}>
         <div className={s.message_user_logo}>
            <img src={imgMess} alt=""/>
         </div>
         <div className="message_text">
            <p>{props.message}</p>
         </div>
      </li>
   )
}

export default Message;