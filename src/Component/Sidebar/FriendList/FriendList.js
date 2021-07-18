import React from "react";
import s from "./FriendList.module.scss";

const FriendList = (props) => {
   return (
      <li>
         {/*<div className={s.sidebar_friend_logo}>*/}
         {/*   <img src={props.sidebarLogo} alt=""/>*/}
         {/*</div>*/}
         <div className={s.sidebar_friend_name}>
            <p>{props.name}</p>
         </div>
      </li>
   )
}

export default FriendList;