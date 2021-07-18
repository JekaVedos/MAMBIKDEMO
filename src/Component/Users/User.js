import React from "react";
import s from "./Users.module.scss";
import defaultPhoto from "../../img/squishi_big.jpg";
import {NavLink} from "react-router-dom";

const User = ({item,index, followingInProgress, unfollow, follow}) => {
   return (
      <li key={index}>
         <div className={s.users_user_icon_follow_cont}>
            <NavLink to={`/profile/${item.id}`}>
               <div className={s.users_user_icon}>
                  <img src={item.photos.small != null
                     ? item.photos.small
                     : defaultPhoto} alt=""/>
               </div>
            </NavLink>
            <div className={s.users_user_follow_btn}>
               {item.followed

                  ? <button disabled={followingInProgress.some(id => id === item.id)}
                            onClick={() => {
                               unfollow(item.id)
                            }}>
                     unfollow</button>
                  : <button disabled={followingInProgress.some(id => id === item.id)}
                            onClick={() => {
                               follow(item.id)
                            }}>
                     follow</button>}
            </div>
         </div>
         <div className={s.user_info_cont}>
            <div className={s.user_info}>
               <div className={s.user_name}>
                  <p>Name: {item.name}</p>
               </div>
               {/*<div className={s.user_status}>*/}
               {/*   <p>Status: {item.status}</p>*/}
               {/*</div>*/}
            </div>
            {/*<div className={s.user_location}>*/}
            {/*   <p>city: {props.location.city}</p>*/}
            {/*   <p>country: {props.location.country}</p>*/}
            {/*</div>*/}
         </div>
      </li>
   )
}



export default User;