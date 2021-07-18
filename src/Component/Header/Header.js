import React from 'react';
import s from './Header.module.scss';
import squishiLogo from '../../img/squishi-round.jpg'
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className="container">
            <div className={s.header_inner}>
               <div className={s.header_nav}>
                  <div className={s.header_logo}>
                     {/*<img src={squishiLogo} alt=""/>*/}
                     <h1>MAMBIK</h1>
                  </div>
                  {/*<div className="header_search_cont">*/}
                  {/*    <input className="header_search" type="text"/>*/}
                  {/*</div>*/}
                  {/*<div className="header_feed">*/}
                  {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>*/}
                  {/*    </svg>*/}
                  {/*</div>*/}
                  {/*<div className="header_music">*/}
                  {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>*/}
                  {/*    </svg>*/}
                  {/*</div>*/}
               </div>
               <div className={s.header_prof}>
                  <div className={s.header_prof_name}>
                     {props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}

                  </div>
                  <div className={`${props.isAuth ? s.header_prof_logo_btn_cont : s.dis_n}`}>
                     <div className={s.header_prof_logo}>
                        <img src={squishiLogo} alt='logo'/>
                     </div>
                     <div className={s.header_prof_open_nav_btn}>
                        <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
                           <path clipRule="evenodd"
                                 d="M2.16 2.3a.75.75 0 011.05-.14L6 4.3l2.8-2.15a.75.75 0 11.9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 01-.13-1.05z"
                                 fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                        <ul className={s.header_prof_nav}>
                           <li onClick={props.logout}>log out</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

// className={!props.isAuth && s.dis_n}

// <Redirect to={'/login'}/>

export default Header;
