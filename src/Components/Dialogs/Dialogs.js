import classes from "./Dialogs.module.css"
import User from "./Users/User";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let UsersMapping = props.state.UsersData.map(m => <User key={m.id+m.name} id={m.id} name={m.name}/> )
    let MessagesMapping = props.state.MessagesData.map(m => <Message key ={m.id+m.message} message={m.message}/>)

    return (
        <div className={classes.area}>
            <div className={classes.dialogs}>
                {UsersMapping}
            </div>
            <div className={classes.messages}>
                {MessagesMapping}
            </div>
        </div>
    )
}

export default Dialogs;
