import React from 'react';
import s from './Posts.module.scss';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const Posts = (props) => {
   let PostElem = props.profilePage.PostD.map((item, index) => <Post message={item.message} likes={item.likes}
                                                                          key={index}/>)
   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   }

   return (
      <div className={s.posts}>
         <div className={s.posts_title}>
            <h1>My posts:</h1>
         </div>
         <AddNewPostFormRedux onSubmit={onAddPost}/>
         <div>{PostElem}</div>
      </div>
   )
}

const maxLength10 = maxLengthCreator(15)

let AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.posts_input_cont}>
         <Field validate={[required, maxLength10]} name='newPostText' component={Textarea} placeholder='your news...'
                className={s.posts_input}/>
         <div className={s.posts_input_cont_send}>
            <button>
               SEND
            </button>
         </div>
      </form>
   )
}

let AddNewPostFormRedux = reduxForm({
   form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


export default Posts;



