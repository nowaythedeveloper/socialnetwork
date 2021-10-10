import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return  <div>
                <div>
                    <img className={s.imgLogo} src="https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/46/2020/10/Space_1.jpg"></img>
                </div>
                <div className={s.descBlock}>
                    ava + desc
                </div>
            </div>
}

export default ProfileInfo