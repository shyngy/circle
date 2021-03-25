let store = {
    _state: {
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

    },
    _callSubscriber(){},

    getState(){return this._state},
    addPost() {
        let idUsers = this._state.profilePage.posts.length
        let userPost = {
            id: ++idUsers,
            message: this._state.profilePage.newPostText,
            likeCount: (Math.random()*10).toFixed(0)
        }
        this._state.profilePage.posts.push(userPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state) // call a function after all changes
    },

    updateNewPostValue(text) {
        this._state.profilePage.newPostText = text
        // console.log(text)
        this._callSubscriber(this._state) // call a function after all changes
    },

    subscribe(observer) {this._callSubscriber = observer}



}

window.store = store

export default store