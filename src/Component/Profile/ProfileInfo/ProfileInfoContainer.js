// import React from "react";
// import {connect} from "react-redux";
// import {compose} from "redux";
// import ProfileInfo from "./ProfileInfo";
// import {getStatus, updateStatus} from "../../../Redux/profileReducer";
// import {withRouter} from "react-router";
//
// class ProfileInfoContainer extends React.Component {
//
//    componentDidMount() {
//       let userId = this.props.match.params.userId;
//       if (!userId) {
//          userId = 17958;
//       }
//
//    }
//
//    render() {
//       return (
//          <ProfileInfo {...this.props} status={this.props.status} updateStatus={this.props.updateStatus()}/>
//       )
//    }
// }
//
// const mapStateToProps = (state) => {
//    return {
//       profileInfo: state.profilePage.ProfileD,
//       profile: state.profilePage.profile,
//       status: state.profilePage.status,
//       userId: state.profilePage.userId
//    }
// }
//
//
//
// export default compose(
//    connect(mapStateToProps,{
//       getStatus,
//       updateStatus,
//       withRouter
//    })
// )(ProfileInfoContainer)