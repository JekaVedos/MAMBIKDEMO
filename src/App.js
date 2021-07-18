import React from 'react';
import './Component/Header/Header.module.scss';
import Settings from "./Component/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import SidebarContainer from "./Component/Sidebar/SidebarContainer";
import UsersContainer from "./Component/Users/UsersContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Component/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/authReducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Fetching from "./Component/common/Fetching/Fetching";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Component/Profile/ProfileContainer'))
const MessagesContainer = React.lazy(() => import('./Component/Messages/MessagesContainer'))

class App extends React.Component {

   componentDidMount() {
      this.props.initializeApp()
   }

   render() {

      if (!this.props.initialized) {
         return <Fetching/>
      }

      return (
         <div>
            <HeaderContainer/>
            <div className="container side_main">
               <SidebarContainer/>
               <div className="main">
                  <Route path='/profile/:userId?'
                         render={withSuspense(ProfileContainer)}/>
                  <Route path='/messages'
                         render={withSuspense(MessagesContainer)}/>
                  <Route path='/users'
                         render={() => {
                            return <React.Suspense fallback={<Fetching/>}>
                               <UsersContainer/>
                            </React.Suspense>
                         }}/>
                  <Route path='/settings'
                         render={() => <Settings/>}/>
                  <Route path='/login'
                         render={() => <Login/>}/>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

export default compose(
   withRouter,
   connect(mapStateToProps, {getAuthUserData, initializeApp}))
(App);