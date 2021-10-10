import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {message: "Hello world", likesCount:"23"},
        {message: "It's my first \"post\"", likesCount:"19"},
        {message: "Nice", likesCount:"10"},
        {message: "My name is Nikita", likesCount:"5"},
        {message: "Very nice", likesCount:"20"}
    ]

    let postElements = postData.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts