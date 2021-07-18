import {NavLink} from "react-router-dom";
import s from "../Message.module.scss";
import imgMess from "../../../img/squishi-round.jpg";

const Dialog = (props) => {
   let path = `/messages/${props.id}`
   return (
      <NavLink to={path}>
         <div className={s.mess_user}>
            <div className={s.mess_user_logo}>
               <img src={imgMess} alt=""/>
            </div>
            <div className={s.mess_user_name}>
               <h1>{props.name}</h1>
            </div>
         </div>
      </NavLink>
   )
}

export default Dialog