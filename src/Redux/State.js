const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MY_MESSAGE = 'SEND-MY-MASSAGE';
const UPDATE_MY_MESSAGE = 'UPDATE-MY-MESSAGE';
let store = {

    _state: {

        dialogstate: {
            UsersData: [
                {id: 3, name: "Nikita", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4ylV12t1kCscpeANFlzzEoZTPHLslvUxfA&usqp=CAU"},
                {id: 1, name: "Anton", avatar: "data:image/png;base64,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"},
                {id: 2, name: "Ura", avatar: "data:image/png;base64,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"},
                {id: 4, name: "Soc", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKY0uhB98-hqbnGY0ZWFW-lE0wsujtRm4-Q&usqp=CAU"},
                {id: 5, name: "Sofa", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKQWRLcAHOp7ySE-ti4QLeJGADx08PO3_Zw&usqp=CAU"},
                {id: 6, name: "Busya", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLfrNi3Ekg5z3PUDbadmN9dBGw8LxhKZFFw&usqp=CAU"},

            ],

            MessagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How r u?"},
                {id: 3, message: "Bye"},
            ],

            MyMessagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Im fine."},
                {id: 3, message: "BB"},
            ],
            newMyMessageText: "go pvpv"
        },
        poststate: {
            PostsData: [

                {id: 1, text: "je mange", like: 50},
                {id: 2, text: "la mange", like: 25},
                {id: 3, text: "fromage", like: 13},
                {id: 4, text: "Ura petuh", like: 0},
                {id: 5, text: "Ura-dura", like: 10}
            ],
            newPostText: "rtr"
        },
        sidebarstate: {

            BFriendsData: [
                {id: 3, name: "Nikita", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4ylV12t1kCscpeANFlzzEoZTPHLslvUxfA&usqp=CAU"},
                {id: 1, name: "Anton", avatar: "data:image/png;base64,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"},
                {id: 2, name: "Ura", avatar: "data:image/png;base64,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"},
            ]
        }
    },
    _callSubscriber() {
        console.log("state was updated")
    },


    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch(action) {
        if (action.type === ADD_POST){
            this._state.poststate.PostsData.push(
                {
                    id: 6,
                    text: this._state.poststate.newPostText,
                    like:99
                }
            )
            this._state.poststate.newPostText="";
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.poststate.newPostText = action.newText;
        }
        else if (action.type === SEND_MY_MESSAGE){


        this._state.dialogstate.MyMessagesData.push(
            {
                id: 4,
                message:this._state.dialogstate.newMyMessageText,
            }
        )
        this._state.dialogstate.newMyMessageText="";
    }
        else if(action.type === UPDATE_MY_MESSAGE){
            this._state.dialogstate.newMyMessageText = action.myMessage;
        }
        this._callSubscriber(this._state);
    }
}
export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostActionCreater = (txt) => ({type: UPDATE_NEW_POST_TEXT, newText: txt});
export const sendMyMessageActionCreater = () => ({type: SEND_MY_MESSAGE});
export const updateMyMessageActionCreater = (mes) => ({type:UPDATE_MY_MESSAGE, myMessage: mes})

window.store=store;
export default store;
