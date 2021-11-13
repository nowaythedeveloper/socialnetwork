let store = {
    rerenderEntireTree() {
        console.log('working')
    },
    _state: {
        profilePage: {
            posts: [
                {message: "Hello world", likesCount:"23"},
                {message: "It's my first \"post\"", likesCount:"19"},
                {message: "Nice", likesCount:"10"},
                {message: "My name is Nikita", likesCount:"5"},
                {message: "Very nice", likesCount:"20"}
            ],
            newPostText: "Noway",
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Damn1'},
                {id: 4, message: 'Amazing'}    
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Nikita'},
                {id: 4, name: 'Yura'},
                {id: 5, name: 'Pasha'},
                {id: 6, name: 'Nastya'}
            ]
        },
        sideBar: {
            friendsList: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Nikita'},
                {id: 4, name: 'Yura'}
            ]
        }
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    }
}

export default store