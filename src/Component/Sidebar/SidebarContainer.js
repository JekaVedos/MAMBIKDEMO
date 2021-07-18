import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {

   return{
      Sidebar: state.Sidebar
   }
}

const SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
