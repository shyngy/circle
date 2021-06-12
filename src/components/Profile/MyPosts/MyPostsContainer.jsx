import React from 'react'
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostValue } from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  const state = props.store.getState()

  let addPostValue = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let textChange = (text) => {
    // let text = newPostElement.current.value
    let action = updateNewPostValue(text)
    props.store.dispatch(action)



  }


  return (<MyPosts
    updateNewPostText={textChange}
    addPostValue={addPostValue}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
  )

}

export default MyPostsContainer