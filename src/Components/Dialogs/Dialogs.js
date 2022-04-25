import React from 'react';
import classes from "./Dialogs.module.css";
import User from "./Users/User";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let UsersMapping = props.state.UsersData.map(m => <User key={m.id + m.name} id={m.id} name={m.name}
                                                            avatar={m.avatar}/>)
    let MessagesMapping = props.state.MessagesData.map(m => <Message key={m.id + m.message} message={m.message}/>)
    let MyMessagesMapping = props.state.MyMessagesData.map(m => <Message key={m.id + m.message} message={m.message}/>)

    let MessageText = React.createRef();
    let SendMessage = () => {
        props.sendMyMassage(MessageText.current.value);
    }

    return (
        <div className={classes.area}>
            <div className={classes.dialogs}>
                {UsersMapping}
            </div>
            <div className={classes.avablock}>
                <img className={classes.avatarImg} alt="" src={props.state.UsersData[1].avatar}/>
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
                <textarea className={classes.enteringarea} ref={MessageText}></textarea>
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
