import React from 'react';
import setIcon from '../../img/icon_set2blue.png';
import s from './Sidebar.module.scss';
import sd from './FriendList/FriendList.module.scss'
import {NavLink} from "react-router-dom";
import FriendList from "./FriendList/FriendList";

const Sidebar = (props) => {

   let FriendListE = props.Sidebar.friends.map((item,index) => <FriendList key={index} name={item.name}/>)

   return (
      <div className={s.sidebar}>
         <ul className={s.sidebar_nav}>
            <li><NavLink activeClassName={s.sidebar_li_active} to="/profile">Profile</NavLink></li>
            <li><NavLink activeClassName={s.sidebar_li_active} to="/messages">Messages</NavLink></li>
            <li><NavLink activeClassName={s.sidebar_li_active} to="/users">Users</NavLink></li>
            {/*<li>Music</li>*/}
         </ul>
         <ul className={sd.sidebar_friend_list}>
            { FriendListE }
         </ul>
         <NavLink to="/settings" className={s.sidebar_settings} activeClassName={s.sidebar_settings_active}>
            <img src={setIcon} alt=""/>
         </NavLink>
      </div>
   )
}

export default Sidebar;