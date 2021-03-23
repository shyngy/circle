import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import profStyle from './Profile.module.css'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {BrowserRouter} from "react-router-dom";



const Profile = (props) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>

        </div>

    )
}

export default Profile