import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
   profilePage: profileReducer,
   MessagePage: messageReducer,
   Sidebar: sidebarReducer,
   UsersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

const store = createStore(reducers, composeWithDevTools(
   applyMiddleware(thunkMiddleware)
));

window._store_ = store

export default store;