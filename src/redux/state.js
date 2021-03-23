import {renderEntireThee} from "../render";

let state = {
    profilePage:
        {

            posts: [
                {id: 1, message: 'hello world', likeCount: 31},
                {id: 2, message: 'it\'s my first post', likeCount: 3},
            ],

        },

    messagesPage:
        {
            messages: [
                {id: 1, message: "hello"},
                {id: 2, message: "how are you"},
                {id: 3, message: "how are u"},
                {id: 4, message: "yoo"},

            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Lesa"},
            ]
        }

}



export const addPost = (postMessages) =>{

    let idUsers = state.profilePage.posts.length
    let userPost = {
        id: ++idUsers,
        message: postMessages,
        likeCount: (Math.random()*10).toFixed(0)
    }
    state.profilePage.posts.push(userPost)
    renderEntireThee(state)


}


export default state