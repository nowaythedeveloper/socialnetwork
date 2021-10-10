import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friendItem}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png" alt="" />
            <span>{props.name}</span>
        </div>
    );
}

export default Friends;
