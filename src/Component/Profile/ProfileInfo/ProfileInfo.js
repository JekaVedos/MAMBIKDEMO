import React from "react";
import s from "../Profile.module.scss";
import squishi from "../../../img/squishi_big.jpg";
import Fetching from "../../common/Fetching/Fetching";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

   if (props.profile === null) {
      return <Fetching/>
   }

   return (
      <div>
         {/*<div className={s.main_bgi}>*/}
         {/*   <img src={props.profile.photos.large === null*/}
         {/*   ? mainBg*/}
         {/*   : props.profile.photos.large} alt=""/>*/}
         {/*</div>*/}
         <div className={s.main_user}>
            <div className={s.main_user_logo}>
               <img src={props.profile.photos.small === null
               ? squishi
               : props.profile.photos.small} alt=""/>
            </div>
            <div className={s.main_user_des}>
               <div className={s.main_user_des_name}>
                  <h1>{props.profile.fullName}</h1>
               </div>
               <ul className={s.main_user_des_fulldes}>
                  <li>
                     {props.profile.aboutMe}
                  </li>
                  <li>
                     {props.profile.lookingForAJob === true
                        ? `searching a job: ${props.profile.lookingForAJobDescription}`
                        : `i don't looking for a job`
                     }
                  </li>
                  <li>
                     <ProfileStatusWithHooks status={props.status}/>
                  </li>
                  {/*<li className={s.main_user_des_fulldes_birtd}>*/}
                  {/*   <b>Birthday:</b> {props.profileInfo.BD}</li>*/}
                  {/*<li className={s.main_user_des_fulldes_city}>*/}
                  {/*   <b>City:</b> {props.profileInfo.city}</li>*/}
                  {/*<li className={s.main_user_des_fulldes_education}>*/}
                  {/*   <b>Education:</b> {props.profileInfo.education}</li>*/}
                  {/*<li className={s.main_user_des_fulldes_portfolio_link}>*/}
                  {/*   <b>Portfolio Link:</b> {props.profileInfo.PortfLink}</li>*/}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;