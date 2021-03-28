import React from 'react'
import sty from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostValue} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p)=>{
        return <Post name={p.message} likeCount={p.likeCount}/>
    })

    let newPostElement = React.createRef()

    let addPostValue = () =>{
        props.dispatch(addPostActionCreator())
    }

    let textChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostValue(text))
    }


    return(
    <div className={sty.content}>
            <h3>my posts</h3>
            <div className={sty.descriptionBlock}>
                <textarea ref={newPostElement}
                          onChange={textChange}
                          value={props.newPostText}
                          className={sty.descriptionArea} name="" id="" cols="122" rows="5"/>
                <button onClick={addPostValue} className={sty.btn}>Add post</button>
            </div>
                {postsElements}
        </div>
    )

}

export default MyPosts