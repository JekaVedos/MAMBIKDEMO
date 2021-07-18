import React from 'react';
import s from './Message.module.scss'
import Message from './Message/Message'
import Dialog from "./Dialog/Dialog";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Messages = (props, state) => {

   let DialogsElem = props.MessagePage.DialogsD.map((item, index) => <Dialog key={index} id={item.id}
                                                                             name={item.name}/>)

   let MessageElem = props.MessagePage.MessageD.map((item, index) => <Message key={index} message={item.message}/>)

   let chatContainer = React.createRef();

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessValue)
      scrollToMyRef()
   }

   let scrollToMyRef = () => {
      const scroll = chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
      chatContainer.current.scrollTo(0, scroll);
   };

   return (
      <div className={s.mess_container}>
         <div className={s.mess_users}>
            {DialogsElem}
         </div>
         <div className={s.mess_messages_cont}>
            <ul ref={chatContainer} className={s.messages_container}>
               {MessageElem}
            </ul>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>
      </div>
   )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div className={s.mess_input_cont}>
            <Field component={Input} validate={[required, maxLength50]} name={'newMessValue'} placeholder={'enter your message'}
                   className={s.mess_input}/>
            <button>
               Send
            </button>
         </div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({
   form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Messages;



