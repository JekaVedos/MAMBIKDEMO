import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
   _state: {
      ProfilePage: {
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
         newPostText: 'mambalove'
      },
      MessagePage: {
         DialogsD: [
            {id: 1, name: 'mambik'},
            {id: 2, name: 'kozak'},
            {id: 3, name: 'pitsa'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'},
            {id: 4, name: 'pena'}
         ],
         MessageD: [
            {id: 1, message: 'hi, mamba'},
            {id: 2, message: 'i love pitsa'},
            {id: 3, message: 'mambasale'},
            {id: 3, message: 'mambasale'},
            {id: 3, message: 'mambasale'},
            {id: 3, message: 'mambasale'},
            {id: 3, message: 'mambasale'}
         ],
         newMessValue: 'pitsa'
      },
      Sidebar: {
         friends: [
            {id: '1', name: 'mamba'},
            {id: '2', name: 'pena'},
            {id: '3', name: 'pitska'},
            {id: '4', name: 'pika'},
            {id: '5', name: 'kaka'}
         ]
      }
   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log('mambas')
   },
   _renderEntireTree() {
      console.log('mamba')
   },
   updateNewMessText(newMessText) {

   },
   subscribe(observer) {
      this._renderEntireTree = observer;
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.ProfilePage, action);
      this._state.MessagePage = messageReducer(this._state.MessagePage, action);
      this._state.Sidebar = sidebarReducer(this._state.Sidebar, action)

      this._renderEntireTree(this._state);
   }
}


export default store;

window.store = store;
