import React from "react";
import s from './../Profile.module.scss'
import {Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatus(this.state.status)
   }

   selectingOnFocus = (e) => {
      e.target.select()
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState, snapshot) {

      if (prevProps.status !== this.props.status) {
         this.setState({
               status: this.props.status
            }
         )
      }

   }

   render() {
      return (
         <div>
            {this.state.editMode
               ? <div className={s.profile_status_changer}>
                  <Field  component={Textarea} onChange={this.onStatusChange} onFocus={this.selectingOnFocus} autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}/>
               </div>
               : <div onDoubleClick={this.activateEditMode} className={s.profile_status}>
                  {this.state.status || 'change your status'}
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus;