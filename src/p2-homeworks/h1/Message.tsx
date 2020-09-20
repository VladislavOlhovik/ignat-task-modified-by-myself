import React from "react";
import css from './Message.module.css';
type messageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}
function Message(props: messageType) {
    return (
        <div className={css.wrapper}>
            <img src={props.avatar} alt="avatar" />
            <div className={css.speechbubble}>
                <div className={css.name}>
                    <div>{props.name}</div>
                    <div className={css.time}>{props.time}</div>
                </div>
                <div className={css.message}>{props.message}</div>
            </div>
        </div>
    );
}

export default Message;
