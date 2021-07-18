import React from 'react';
import s from './Post.module.scss';
import postLogo from '../../../../img/squishi_big.jpg'

function Post(props) {
   return(
      <div className={s.post}>
         <div className={s.post_inner}>
            <div className={s.post_logo}>
               <img src={postLogo} alt=""/>
            </div>
            <div className={s.post_text}>
               {props.message}
            </div>
         </div>
         <div className={s.post_likes}>
            <div className={s.post_likes_svg}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
               </svg>
            </div>
            <div className={s.post_likes_scorer}>
               <p>{props.likes}</p>
            </div>
         </div>
      </div>
   )
}

export default Post;



