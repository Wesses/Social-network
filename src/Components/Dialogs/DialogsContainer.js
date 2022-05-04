import {sendMyMessageActionCreater, updateMyMessageActionCreater} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let dialogState = props.store.getState().dialogstate;

    let SendMessage = () => {
        props.store.dispatch(sendMyMessageActionCreater());
    }

    let changeMyMessage = (txt) =>{
        props.store.dispatch(updateMyMessageActionCreater(txt));
    }

    return ( <Dialogs SendMessage = {SendMessage} changeMyMessage = {changeMyMessage}
                      UsersData = {dialogState.UsersData}
                      MessagesData = {dialogState.MessagesData}
                      MyMessagesData = {dialogState.MyMessagesData}
                      newMyMessageText = {dialogState.newMyMessageText}/>
    )
}

export default DialogsContainer;
