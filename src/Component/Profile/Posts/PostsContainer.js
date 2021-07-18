import {addPost} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPost(newPostText))
         dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
