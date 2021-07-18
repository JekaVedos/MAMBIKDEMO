import React from "react";
import s from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,  ...props}) => {

   return <div>
      <ul className={s.users_main_cont}>
         <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
         {users.map((item, index) =>
            <User item={item}
                  index={index}
                  followingInProgress={props.followingInProgress}
                  unfollow={props.unfollow}
                  follow={props.follow}
            />)}
      </ul>
   </div>
}


export default Users;