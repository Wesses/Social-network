const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, text: "je mange", like: 50},
        {id: 2, text: "la mange", like: 25},
        {id: 3, text: "fromage", like: 13},
        {id: 4, text: "Ura privet", like: 0},
        {id: 5, text: "Ura poka", like: 10}
    ],
    newPostText: "rtr"};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            state.PostsData.push(
                {
                    id: 6,
                    text: state.newPostText,
                    like: 99
                }
            )
            state.newPostText = "";
            return state;
        }
        case UPDATE_NEW_POST_TEXT:{
            state.newPostText = action.newText;
            return state;
            }
        default:{
            return state;
        }
    }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostActionCreater = (txt) => ({type: UPDATE_NEW_POST_TEXT, newText: txt});

export default profileReducer;
