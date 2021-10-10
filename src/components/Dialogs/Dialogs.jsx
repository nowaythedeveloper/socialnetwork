import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return  <div className={s.dialogs}>
                <div className={s.dialogs__items}>
                    <div className={s.dialog + ' ' + s.active}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Nikita
                    </div>
                    <div className={s.dialog}>
                        Valera
                    </div>
                    <div className={s.dialog}>
                        Yura
                    </div>
                    <div className={s.dialog}>
                        Vlad
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
}

export default Dialogs