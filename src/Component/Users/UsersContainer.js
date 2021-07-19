import React from "react";

import {
   follow,
   requireUsers,
   setCurrentPage,
   toggleFollowingInProgress,
   unfollow
} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Fetching from "../common/Fetching/Fetching";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getPageSize,
   getTotalUsersCount, getUsers
} from "../../Redux/usersSelectors";
import Users from "./Users";

class UsersContainer extends React.Component {

   componentDidMount() {

      const {currentPage, pageSize} = (this.props)

      this.props.requireUsers(currentPage, pageSize)
   }

   onPageChanged = (pageNumber) => {

      const {pageSize} = (this.props)

      this.props.requireUsers(pageNumber, pageSize)

      this.props.setCurrentPage(pageNumber)

   }

   render() {
      return <>
         {this.props.isFetching
            ? <Fetching/>
            : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

export default compose(
   // withAuthRedirect,
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingInProgress,
      requireUsers,
      getUsers
   })
)(UsersContainer)
