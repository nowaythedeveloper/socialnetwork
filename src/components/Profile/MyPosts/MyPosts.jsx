import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return  <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message="Hello world"/>
                    <Post message="It's my first post"/>
                    <Post message="Nice"/>
                    <Post message="My name is Nikita"/>
                </div>
            </div>
}

export default MyPosts