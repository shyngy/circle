import React from 'react';
import Loading from '../../Loading';
import ProfileStatus from '../../ProfileStatus';
import sty from './ProfileInfo.module.css';

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Loading />
  };
  return (
    <div>
      <ProfileStatus/>
      <span>{profile.fullName}</span>
      <img className={sty.content_img}
        alt="panorama"
        src="https://cdnb.artstation.com/p/assets/images/images/014/940/531/large/jasmina-seidl-nature-panorama.jpg?1546410571" />
      <div className={sty.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};
export default ProfileInfo;







