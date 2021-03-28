import React from 'react'
import sty from './Post.module.css'

const Post = (props) => {
    return (
        <div className={sty.descriptionBlock}>
            <div className={sty.user}>
                <img src="https://images.indianexpress.com/2020/03/cat.jpg" alt=""/>
            </div>
            <div>{props.name}</div>

            <div className={sty.like}>
                {props.likeCount} like
            </div>
        </div>
    )
}

export default Post