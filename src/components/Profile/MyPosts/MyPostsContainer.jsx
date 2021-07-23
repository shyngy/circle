import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostValue } from "../../../redux/profile-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostValue(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }

  };
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;