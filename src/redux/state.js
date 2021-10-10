let state = {
    profilePage: {
        posts: [
            {message: "Hello world", likesCount:"23"},
            {message: "It's my first \"post\"", likesCount:"19"},
            {message: "Nice", likesCount:"10"},
            {message: "My name is Nikita", likesCount:"5"},
            {message: "Very nice", likesCount:"20"}
        ],
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
}

export default state