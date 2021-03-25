import React from 'react'
import sty from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={sty.content_img}
                 src="https://cdnb.artstation.com/p/assets/images/images/014/940/531/large/jasmina-seidl-nature-panorama.jpg?1546410571"/>
            <div className={sty.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo







