import React, {useEffect, useState} from "react";
import s from './../Profile.module.scss';

const ProfileStatus = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect( () => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div>
         {editMode
               ? <div className={s.profile_status_changer}>
                  <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
               </div>
               : <div onDoubleClick={activateEditMode} className={s.profile_status}>
                  {status || 'change your status'}
               </div>
         }
      </div>
   )
}

export default ProfileStatus;