import {sendMessageActionCreator} from "../../Redux/messageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
   return {
      MessagePage: state.MessagePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (newMessValue) => {
         dispatch(sendMessageActionCreator(newMessValue));
         dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', updMessText: ''});
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   // withAuthRedirect
)(Messages);



