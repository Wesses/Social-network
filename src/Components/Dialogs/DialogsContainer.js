import {sendMyMessageActionCreater, updateMyMessageActionCreater} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {

            let dialogState = store.getState().dialogstate;

            let SendMessage = () => {
                store.dispatch(sendMyMessageActionCreater());
            }

            let changeMyMessage = (txt) => {
                store.dispatch(updateMyMessageActionCreater(txt));
            }

            return (<Dialogs SendMessage={SendMessage} changeMyMessage={changeMyMessage}
                             UsersData={dialogState.UsersData}
                             MessagesData={dialogState.MessagesData}
                             MyMessagesData={dialogState.MyMessagesData}
                             newMyMessageText={dialogState.newMyMessageText}/>
            )
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;
