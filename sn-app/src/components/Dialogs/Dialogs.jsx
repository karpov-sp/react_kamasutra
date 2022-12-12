import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Julia</p>
                </div>
                <div className={classes.dialog}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Lena</p>
                </div>
                <div className={classes.dialog}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Kate</p>
                </div>
                <div className={classes.dialog}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Vania</p>
                </div>
                <div className={classes.dialog}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Sofi</p>
                </div>
                <div className={classes.dialog}>
                    <img className={classes.pic} src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
                    <p className={classes.name}>Matvei</p>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;