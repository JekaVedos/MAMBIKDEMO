import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Fetching from "../Component/common/Fetching/Fetching";


export const withSuspense = (Component) => {

   return (props) => {
      return <React.Suspense fallback={<Fetching/>}>
         <Component {...props}/>
      </React.Suspense>
   }

}

