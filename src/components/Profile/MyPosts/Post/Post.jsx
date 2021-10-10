import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return  <div className={s.item}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png" alt="" />
                {props.message}
                <div>
                    <span>like</span>
                    <span>{props.likesCount}</span>
                </div>
            </div>
}

export default Post