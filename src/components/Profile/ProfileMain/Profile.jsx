import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import profStyle from './Profile.module.css'
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostValue={props.updateNewPostValue}
                     posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>

        </div>

    )
}

export default Profile