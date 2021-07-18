import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import s from './Login.module.scss'
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router";

const maxLength50 = maxLengthCreator(50)

const maxLength25 = maxLengthCreator(25)

const LoginForm = ({handleSubmit, error}) => {

   return (
      <div className={s.login_main_container}>
         <form onSubmit={handleSubmit}>
            <div className={s.login_form_container}>
               <div className={s.login_title}>
                  <h1>LOGIN</h1>
               </div>
               <div>
                  <Field placeholder={'Email'} name={'email'} validate={[required, maxLength50]} component={Input}/>
               </div>
               <div>
                  <Field placeholder={'Password'} name={'password'} validate={[required, maxLength25]} component={Input} type={'password'}/>
               </div>
               <div className={s.remember_me}>
                  <Field name={'rememberMe'} component={Input} type={'checkbox'}/>
                  <p>remember </p>
                  <p>me</p>
               </div>
               {error &&
               <span className={s.error_alert}>
                  {error}
               </span>}
               <div>
                  <button className={s.login_button}>
                     Login
                  </button>
               </div>
            </div>
         </form>
      </div>
   )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = (props) => {

   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
      console.log(formData)
   }

   if (props.isAuth) {
      return <Redirect to={'/profile'}/>
   }

   return (
      <div>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   )
}

const mapStateToProps = (state) => ({

   isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, {login})(Login)