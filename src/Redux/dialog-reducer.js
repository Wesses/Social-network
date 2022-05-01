const SEND_MY_MESSAGE = 'SEND-MY-MASSAGE';
const UPDATE_MY_MESSAGE = 'UPDATE-MY-MESSAGE';


const dialogReducer = (state, action) =>{
     switch(action.type){
         case SEND_MY_MESSAGE: {
             state.MyMessagesData.push(
                 {
                     id: 4,
                     message: state.newMyMessageText,
                 }
             )
             state.newMyMessageText="";
             return state;
         }
         case UPDATE_MY_MESSAGE: {
            state.newMyMessageText = action.myMessage;
             return state;
         }
         default: return state;

    }

}
export const sendMyMessageActionCreater = () => ({type: SEND_MY_MESSAGE});
export const updateMyMessageActionCreater = (mes) => ({type:UPDATE_MY_MESSAGE, myMessage: mes})

export default dialogReducer;
