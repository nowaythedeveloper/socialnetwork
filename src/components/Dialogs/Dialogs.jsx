import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = props => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Yura'},
        {id: 5, name: 'Pasha'},
        {id: 6, name: 'Nastya'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Damn1'},
        {id: 4, message: 'Amazing'}    
    ]

    let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs