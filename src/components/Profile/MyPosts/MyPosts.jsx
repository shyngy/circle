import React from 'react'
import sty from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  console.log(props.updateNewPostText);
  let postsElements = props.posts.map((p, i) => {
    return <Post name={p.message} key={i} likeCount={Number(p.likeCount)} />
  })

  let newPostElement = React.createRef()



  let textChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }


  return (
    <div className={sty.content}>
      <h3>my posts</h3>
      <div className={sty.descriptionBlock}>
        <textarea ref={newPostElement}
          onChange={textChange}
          value={props.newPostText}
          className={sty.descriptionArea} name="" id="" cols="122" rows="5" />
        <button onClick={props.addPostValue} className={sty.btn}>Add post</button>
      </div>
      {postsElements}
    </div>
  )

}

export default MyPosts