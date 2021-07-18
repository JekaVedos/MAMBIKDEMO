// import React from "react";
// import s from './../Users.module.scss'
// import defaultPhoto from './../../../img/squishi-round.jpg'
//
// const User = (props) => {
//    return (
//       <li>
//          <div className={s.users_user_icon_follow_cont}>
//             <div className={s.users_user_icon}>
//                <img src={props.photos.small != null ? props.photos.small : {defaultPhoto}} alt=""/>
//             </div>
//             <div className={s.users_user_follow_btn}>
//                {props.followed
//                ? <button onClick={ () => {
//                   props.unfollow(props.id)
//                   }}>unfollow</button>
//                :<button onClick={ () => {
//                   props.follow(props.id)
//                   }}>follow</button>}
//             </div>
//          </div>
//          <div className={s.user_info_cont}>
//             <div className={s.user_info}>
//                <div className={s.user_name}>
//                   <p>Name: {props.name}</p>
//                </div>
//                <div className={s.user_status}>
//                   <p>Status: {props.status}</p>
//                </div>
//             </div>
//             {/*<div className={s.user_location}>*/}
//             {/*   <p>city: {props.location.city}</p>*/}
//             {/*   <p>country: {props.location.country}</p>*/}
//             {/*</div>*/}
//          </div>
//       </li>
//    )
// };
//
// export default User;