import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectsHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 2654,
   isFetching: true,
   followingInProgress: []
};

let usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(
               state.users,
               action.userId,
               'id',
               {followed: true})
         }
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(
               state.users,
               action.userId,
               'id',
               {followed: false})

   }
      case SET_USERS: {
         return {...state, users: action.users}
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.count
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case TOGGLE_FOLLOWING_IN_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      }
      default:
         return state;
   }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
   type: TOGGLE_FOLLOWING_IN_PROGRESS,
   isFetching,
   userId
})

export const requireUsers = (currentPage, pageSize) => async (dispatch) => {

   dispatch(toggleIsFetching(true));

   let data = await usersAPI.requireUsers(currentPage, pageSize)

   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

   dispatch(toggleFollowingInProgress(true, userId))
   let data = await apiMethod(userId)

   if (data.resultCode == 0) {
      dispatch(actionCreator(userId))
   }

   dispatch(toggleFollowingInProgress(false, userId))

}

export const follow = (userId) => (dispatch) => {

   followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess)

}

export const unfollow = (userId) => (dispatch) => {

   followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess)

}


export default usersReducer;