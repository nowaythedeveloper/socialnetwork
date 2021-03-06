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

    let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let messageElement = React.createRef()
    let sendMessage = () => {
        alert(messageElement.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={messageElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs