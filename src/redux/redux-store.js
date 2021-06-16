import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import thunk from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer
})

let store = createStore(reducers)






export default store