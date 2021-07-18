import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false
};

let authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload
         }

      default:
         return state;
   }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
   type: SET_USER_DATA,
   payload: {id, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {

   let data = await headerAPI.me()

   if (data.resultCode === 0) {
      let {id, login, email} = data.data;
      dispatch(setAuthUserData(id, email, login, true))
   }

}

export const login = (email, password, rememberMe) => async (dispatch) => {

   let data = await headerAPI.login(email, password, rememberMe)

   if (data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else {
      // let message = data.messages.length > 0 ? data.messages[0] : 'some error'
      dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'some error'}))
   }

}

export const logout = () => async (dispatch) => {

   let data = await headerAPI.logout()

   if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}


export default authReducer;