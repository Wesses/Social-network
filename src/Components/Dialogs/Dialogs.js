import React from 'react';
import classes from "./Dialogs.module.css";
import User from "./Users/User";
import Message from "./Messages/Message";
import {sendMyMessageActionCreater, updateMyMessageActionCreater} from "../../Redux/State";

const Dialogs = (props) => {
    let UsersMapping = props.dialogstate.UsersData.map(m => <User key={m.id + m.name} id={m.id} name={m.name}
                                                            avatar={m.avatar}/>)
    let MessagesMapping = props.dialogstate.MessagesData.map(m => <Message key={m.id + m.message} message={m.message}/>)
    let MyMessagesMapping = props.dialogstate.MyMessagesData.map(m => <Message key={m.id + m.message} message={m.message}/>)

    let MessageText = React.createRef();

    let SendMessage = () => {
        props.dispatch(sendMyMessageActionCreater());
    }

    let changeMyMassage = () =>{
        props.dispatch(updateMyMessageActionCreater(MessageText.current.value));
    }

    return (
        <div className={classes.area}>
            <div className={classes.dialogs}>
                {UsersMapping}
            </div>
            <div className={classes.avablock}>
                <img className={classes.avatarImg} alt="" src={props.dialogstate.UsersData[1].avatar}/>
            </div>
            <div className={classes.messages}>
                {MessagesMapping}
            </div>
            <div className={classes.mymessages}>
                {MyMessagesMapping}
            </div>
            <div>
                <img className={classes.avatarImg} alt=""
                     src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"/>
            </div>
            <div className={classes.enter}>
                <textarea
                    className={classes.enteringarea}
                    ref={MessageText}
                    value={props.dialogstate.newMyMessageText}
                    onChange={changeMyMassage}/>
                <div>
                    <button className={classes.enteringbutton} onClick={SendMessage}>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
