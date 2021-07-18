import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": "82585bda-8ac2-4ab8-90f9-a9ab0e49ce8b"}
})

export const usersAPI = {
   requireUsers: (currentPage, pageSize) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
         .then(response => {
            return response.data
         })
   },
   follow: (id) => {
      return instance.post(`follow/${id}`,)
         .then(response => {
            return response.data
         })
   },
   unfollow: (id) => {
      return instance.delete(`follow/${id}`)
         .then(response => {
            return response.data
         })
   }
}

export const headerAPI = {
   me: () => {
      return instance.get(`auth/me`)
         .then(response => {
            return response.data
         })
   },
   login: (email, password, rememberMe = false) => {
      return instance.post(`auth/login`, {email, password, rememberMe})
         .then(response => {
            return response.data
         })
   },
   logout: () => {
      return instance.delete(`auth/login`)
         .then(response => {
            return response.data
         })
   }
}

export const profileAPI = {
   getProfile: (userId) => {
      return instance.get(`profile/${userId}`)
         .then(response => {
            return response.data
         })
   },
   getStatus: (userId) => {
      return instance.get(`profile/status/${userId}`)
         .then(response => {
            return response.data
         })
   },
   updateStatus: (status) => {
      return instance.put(`profile/status`, {status})
      // .then(response => {
      //    return response.data
      // })
   }
}


