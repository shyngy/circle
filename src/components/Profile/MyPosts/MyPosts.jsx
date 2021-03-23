import React from 'react'
import sty from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {



    let newPostElement = React.createRef()

    let addPostValue = () =>{

        let word = newPostElement.current.value
        props.addPost(word)
        newPostElement.current.value = ""
    }

    let postsElements = props.posts.map((p)=>{
        return <Post name={p.message} likeCount={p.likeCount}/>
    })
    return(
    <div className={sty.content}>
            <h3>my posts</h3>
            <div className={sty.descriptionBlock}>
                <textarea ref={newPostElement} className={sty.descriptionArea} name="" id="" cols="122" rows="5"></textarea>
                <button onClick={addPostValue} className={sty.btn}>Add post</button>
            </div>
                {postsElements}
        </div>
    )

}

export default MyPosts