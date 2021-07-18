import React from 'react';
import s from './Profile.module.scss';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <main className={s.main}>
         <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
         <PostsContainer/>
      </main>
   )
}

export default Profile;



