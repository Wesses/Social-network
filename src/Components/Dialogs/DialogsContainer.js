import {sendMyMessageActionCreator, updateMyMessageActionCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        UsersData: state.dialogstate.UsersData,
        MessagesData: state.dialogstate.MessagesData,
        MyMessagesData: state.dialogstate.MyMessagesData,
        newMyMessageText: state.dialogstate.newMyMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        SendMessage: () => {
            dispatch(sendMyMessageActionCreator());
        },
        changeMyMessage: (txt) => {
            dispatch(updateMyMessageActionCreator(txt));
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
