import React from "react";
import s from '../../Users/Users.module.scss'
import difPreloader from "../../../img/preloader.gif";

let Fetching = () => {
   return <div className={s.fetching_cont}>
      <div className={s.fetching_img_cont}>
         <img src={difPreloader} alt={'preloader'}/>
      </div>
   </div>
}

export default Fetching;