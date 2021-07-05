import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostValue } from "../../../redux/profile-reducer";
import { connect } from "react-redux"
// const MyPostsContainer = () => {



//   return (<StoreContext.Consumer>{
//     (store) => {
//       console.log(store);
//       const state = store.getState()

//       let addPost = () => {
//         
//       }

//       let textChange = (text) => {
//         // let text = newPostElement.currentstore.dispatch(addPostActionCreator()).value
//         let action = updateNewPostValue(text)
//         store.dispatch(action)



//       }

//       return <MyPosts
//         updateNewPostText={textChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//       />
//     }
//   }
//   </StoreContext.Consumer>
//   )

// }


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostValue(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }

  }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer