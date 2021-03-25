let renderEntireThee = () => {}

let state = {
    profilePage:
        {

            posts: [
                {id: 1, message: 'hello world', likeCount: 31},
                {id: 2, message: 'it\'s my first post', likeCount: 3},
            ],
            newPostText: 'typing '

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

window.state = state

export const addPost = () =>{
    let idUsers = state.profilePage.posts.length
    let userPost = {
        id: ++idUsers,
        message: state.profilePage.newPostText,
        likeCount: (Math.random()*10).toFixed(0)
    }
    state.profilePage.posts.push(userPost)
    state.profilePage.newPostText = ''
    renderEntireThee(state) // call a function after all changes


}

export const updateNewPostValue = (text)=>{
    state.profilePage.newPostText = text
    // console.log(text)
    renderEntireThee(state) // call a function after all changes
}

export const subscribe = (observer) => renderEntireThee = observer


export default state