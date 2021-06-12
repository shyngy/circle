import React from 'react'
import MyPostsContainer from '../MyPosts/MyPostsContainer'
import profStyle from './Profile.module.css'
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props.store);
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}
      />

    </div>

  )
}

export default Profile