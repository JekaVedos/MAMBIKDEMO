import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   ProfileD: {
      name: 'Mamba',
      BD: '09.03.2005',
      city: 'mambaria',
      education: 'pitseed',
      PortfLink: 'https://mamba/pitsa'
   },
   PostD: [
      {message: "Hi, mambas lorem", likes: '5'},
      {message: "I love pitsa", likes: '200'}
   ],
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: action.newPostText,
            likes: '1488'
         };
         return {
            ...state,
            ...state.PostD.unshift(newPost)
         }
      }
      case SET_USER_PROFILE : {
         return {
            ...state,
            profile: action.profile
         }
      }
      case SET_STATUS : {
         return {
            ...state,
            status: action.status
         }
      }
      default :
         return state;
   }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {

   let response = await profileAPI.getProfile(userId)
   dispatch(setUserProfile(response));

}

export const getStatus = (userId) => async (dispatch) => {

   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response));

}

export const updateStatus = (status) => async (dispatch) => {

   let response = await profileAPI.updateStatus(status)

   if (response.resultCode === 0) {
      dispatch(setStatus(status));
   }

}

export default profileReducer;